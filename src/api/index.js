import http from "../config/http";

//首页推荐信息
export const getHomeInfo = () => http.get("/api/music/recommend", {});

//获取排行榜
export const getRanking = () => http.get("/api/music/toplist", {});

//歌单中的曲目列表
//params: songListId
export const getSongList = (data) =>
  http.get(`/api/music/songIdlist/${data}`, {});

//根据歌曲id, 获取播放 url
//params: songIdList: id1,id2,id3...
export const getSongUrl = (data) =>
  http.get(`/api/music/songUrllist/${data}`, data);

export const getRankList = (data) =>
  http.get(`/api/public/?service=Live.getCharmList`, data);
