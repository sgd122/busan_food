import api from "../../../settings/Api";

export default function apiSearch({ params }) {
    return api.get('foods/parsing/', params)
        .then(res => {
            if (res.status != 200) { return false; }
            const data = res.data;
            return { data }
        })
}
