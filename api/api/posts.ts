import { Router } from "express";
const router = Router();
// router.get("/drafts", async (req, res) => {
//   const posts = await prisma.post.findMany({
//     where: { published: false },
//     include: { author: true },
//   });
//   res.json(posts);
// });

router.get("/feed", async (req, res) => {
  //   const posts = await prisma.post.findMany({
  //     where: { published: true },
  //     include: { author: true },
  //   });
  res.json("hi");
});

// router.get("/filterPosts", async (req, res) => {
//   const { searchString }: { searchString?: string } = req.query;
//   const filteredPosts = await prisma.post.findMany({
//     where: {
//       OR: [
//         {
//           title: {
//             contains: searchString,
//           },
//         },
//         {
//           content: {
//             contains: searchString,
//           },
//         },
//       ],
//     },
//   });
//   res.json(filteredPosts);
// });

// router.post(`/post`, async (req, res) => {
//   const { title, content, authorEmail } = req.body;
//   const result = await prisma.post.create({
//     data: {
//       title,
//       content,
//       published: false,
//       author: { connect: { email: authorEmail } },
//     },
//   });
//   res.json(result);
// });

// router.delete(`/post/:id`, async (req, res) => {
//   const { id } = req.params;
//   const post = await prisma.post.delete({
//     where: {
//       id: Number(id),
//     },
//   });
//   res.json(post);
// });

// router.get(`/post/:id`, async (req, res) => {
//   const { id } = req.params;
//   const post = await prisma.post.findUnique({
//     where: {
//       id: Number(id),
//     },
//     include: { author: true },
//   });
//   res.json(post);
// });

// router.put("/publish/:id", async (req, res) => {
//   const { id } = req.params;
//   const post = await prisma.post.update({
//     where: { id: Number(id) },
//     data: { published: true },
//   });
//   res.json(post);
// });

// router.post(`/user`, async (req, res) => {
//   const result = await prisma.user.create({
//     data: {
//       ...req.body,
//     },
//   });
//   res.json(result);
// });

export default router;
