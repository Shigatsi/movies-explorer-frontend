export default function baseMainUrlHandler() {
  if (window.location.protocol === "http:") {
    return "http://localhost:3001";
  }
  return "https://api.shigatsimovie.students.nomoredomains.icu";
}
