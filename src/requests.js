import axios from 'axios';

const ACCESS_TOKEN = 4251169484935788;

export const getBasicHeroInfoById = async id => {
    const { data: powerstats } = await axios.get(`https://superheroapi.com/api/${ACCESS_TOKEN}/${id}/powerstats`);
    const { data: image } = await axios.get(`https://superheroapi.com/api/${ACCESS_TOKEN}/${id}/image`);

    return {name: powerstats.name, powerstats, imgUrl: image.url}
}