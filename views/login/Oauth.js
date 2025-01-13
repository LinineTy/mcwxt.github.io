import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { getTemplate, cache } from 'tao';
import { Axios } from 'axios';
export default {
  setup() {
    const route = useRoute();
    const axios = new Axios({});
    axios.post('/api/login/access_token/' + route.query.code).then((response) => {
      cache.setItem('access_token', JSON.parse(response.data).access_token);
    }).catch((error) => alert(error));
    return {
      logged: true
    }
  },
  name: 'Oauth',
  template: await getTemplate('/views/login/Login')
}