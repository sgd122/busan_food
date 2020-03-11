from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpResponse,Http404, HttpResponseNotFound
import requests
from bs4 import BeautifulSoup

# Create your views here.
@api_view(['GET', 'POST'])
def foods_list(request):
    '''
    음식점 리스트를 조회한다.
    '''
    foods_list = [
        { 'id': 1, 'title': '강가네손만두', 'content': '칼국수/만두' },
        { 'id': 2, 'title': '마봉자김밥', 'content': '분식(라면/김밥/오므라이스...)' },
        { 'id': 3, 'title': '맥도날드', 'content': '햄버거' },
        { 'id': 4, 'title': '갈비탕', 'content': '갈비탕' },
        { 'id': 5, 'title': '유가네닭갈비', 'content': '볶음밥' },
        { 'id': 6, 'title': '하늘한우', 'content': '점심특선(고기/된장찌개)' },
        { 'id': 7, 'title': '맘스터치', 'content': '햄버거' },
        { 'id': 8, 'title': '천운숯불갈비', 'content': '점심특선(고기/된장찌개)' },
        { 'id': 9, 'title': '철호국밥', 'content': '국밥' },
        { 'id': 10, 'title': '더도이종가집', 'content': '국밥' },
        { 'id': 11, 'title': '오쇼김밥', 'content': '분식(라면/김밥/오므라이스...)' },
    ]
    return Response(foods_list)

@api_view(['GET', 'POST'])
def foods_parsing(request):
    params = {
        # 'query': q
        'lat':"35.136800",
        'lng':"129.069898",
        'dis':"500"
    }    
    # 응답 get 요청
    # html = req.get('http://www.diningcode.com/list.php?', params=params).text

    dining_url = "https://www.diningcode.com/list.php?query=&lat=35.136800&lng=129.069898&dis=500";
    html = requests.get(dining_url).text

    soup = BeautifulSoup(html, 'html.parser')
    rank_list = []
    
    restaurants = soup.findAll("span",attrs={"class":"btxt"})
    food_kinds = soup.findAll("span", attrs={"class":"stxt"})


    foods_list = []
    i = 0
    for line1, line2 in zip(restaurants[0:], food_kinds[0:]):
        # print(line1.get_text(), end= ': ')
        # print(line2.get_text())
        foods_list.append({ 'id': i, 'title': line1.get_text(), 'content': line2.get_text() })
        i+=1

    # 1위 ~10위 식당이름하고, 링크
    # for idx, tag in enumerate(soup.select('div.localeft-cont span'), 1):
    #     rank_list.append('{}.{}'.format(idx, tag.text) + ' ' + 'http://www.diningcode.com/' + tag['href'])

    # print("::rank_list::",rank_list)
    # return rank_list

    return Response(foods_list)