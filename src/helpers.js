export function openMaps() {
  window.open("https://www.google.com/maps/place/24+Cornelia+St,+New+York,+NY+10014,+USA/@40.7312849,-74.004794,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25993b83bbd75:0xdce36dc3032c4ff6!8m2!3d40.7312809!4d-74.0022191!16s%2Fg%2F11csk1wwjb?entry=ttu", "_blank");
}

export function openEmail(email) {
  const mailtoLink = `mailto:${email}`
  window.location.href = mailtoLink
}