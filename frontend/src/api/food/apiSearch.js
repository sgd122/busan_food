import api from "../../settings/Api";

export default function apiSearch({ params }) {
    return api.get('foods/parsing/', params)
        .then(res => {
            if (!res.ok) { return false; }

            console.log(res)
        })
}
