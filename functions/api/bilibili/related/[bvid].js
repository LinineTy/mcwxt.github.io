export async function onRequestGet(context) {
  const response = await fetch('https://api.bilibili.com/x/web-interface/archive/related?bvid=' + context.params.bvid);
  return new Response(response.body);
}
