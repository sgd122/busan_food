from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpResponse,Http404, HttpResponseNotFound
import requests,re
# import cssutils
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
    foods_list = []
    page = 1
    i = 1
    dining_url = "https://www.diningcode.com/list.php"
    
    for page in range(10): 
        params = {            
            'lat':"35.136800",
            'lng':"129.069898",
            'dis':"500",
            'page':page+1
        }        
        html = requests.get(dining_url, params=params).text # 응답 get 요청
        soup = BeautifulSoup(html, 'html.parser')        
        restaurants = soup.findAll("span",attrs={"class":"btxt"})
        food_kinds = soup.findAll("span", attrs={"class":"stxt"})        
        img_kinds = soup.findAll("span", attrs={"class":"img"})        

        for line1, line2, line3 in zip(restaurants[0:], food_kinds[0:], img_kinds[0:]):            
            style = line3.get("style")
            matched = re.search(r'(https?://[\da-zA-Z-0-9_\./]+)', style)        
            img_url = matched.group(1)

            foods_list.append({ 'id': i, 'title': line1.get_text(), 'content': line2.get_text(), 'images':img_url })
            i+=1

    return Response(foods_list)