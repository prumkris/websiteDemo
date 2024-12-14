import PocketBase from './pocketbase.es.mjs'

const url = 'https://website-demo.pockethost.io/'
const pb = new PocketBase(url)


async function getAllPost() {
    const records = await pb.collection('Posts').getFullList()
    return records
}

export {
    getAllPost
}