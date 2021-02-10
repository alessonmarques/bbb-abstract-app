import axios from 'axios'


const setData = async ({ commit }, obj) => {

  const data = (await axios.get('http://k-nella.ddns.net/bbb-abstract/getBigBrotherBrasilData.php')).data

    await Promise.all(data.brothers.map(async (brother, key) => {
      data.brothers[key].instagramData = ( await axios.get(brother.instagramUrl)).data.graphql.user
    }));

  commit('SET_DATA', { data })

}

export default {

  setData

}
