// import type { NextApiRequest, NextApiResponse } from 'next';
// import { api } from "~/trpc/server";


// export async function GET(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const url = req.url ?? '';
//     console.log('Current pathname:', url);
//     // Parse the URL to extract the query parameters
//     const parsedUrl = new URL(url, 'http://localhost:3000');
//     const id = parsedUrl.searchParams.get('id');
//     console.log('Extracted Post ID:', id);
//     if (!id) {
//       throw new Error('Invalid or missing id parameter');
//     }
//     const parsedId = parseInt(id, 10);
//     if (isNaN(parsedId)) {
//       throw new Error('Invalid id parameter');
//     }
//     const post = await api.post.getOneId.query({ id: parsedId });
//     console.log('Response:', post?.name);
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'Failed to fetch post' });
//   }
// }
// export async function GET(id: number) {
//   try {
//     const posts = await api.post.getOneId.query({ id: id });
//     console.log("Response:", posts);
//     return {
//       statusCode: 200,
//       body: JSON.stringify(posts),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     };
//   } catch (error) {
//     console.log("Error:", error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Failed to fetch post' }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     };
//   }
// }
