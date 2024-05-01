import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
// import { models } from '@/data/models'
// import { makes } from '@/data/makes'


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID // "pv8y60vp"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET // "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03'
const apiToken = process.env.API_TOKEN

export const client = createClient({
  projectId,
  dataset,
  token: apiToken,
  apiVersion,
  useCdn: false,
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

// makes.map((item, ind) => {
//   const record = {
//     _id: `make-id-${ind + 1}`,
//     _type: 'make',
//     make: item.text
//   }
//   client.createOrReplace(record)
//   console.log(record)
// })

// Object.keys(models).forEach((makeKey, makeIndex) => {
//   const key = makeKey;
//   models[key].forEach((modelItem, modelIndex) => {
//     const record = {
//       _id: `${key+1}-${modelItem.value}-${modelIndex + 1}`,
//       _type: 'models',
//       make: { _type: 'reference', _ref: modelItem.makeRef },
//       model: modelItem.text,
//     };
//     client.createOrReplace(record);
//     // console.log(record)
//   });
// });

// const keys = Object.keys(models);

// keys.forEach((key, index) => {
//   console.log(`Index of ${key}: ${index}`);
// });
