export default function decorate(block) {
  // Extract provider and embedID
  const provider = block.querySelector(':scope > div').innerText.trim()
  const embedId = block
    .querySelector(':scope > div:last-child')
    .innerText.trim()
  const embedFrameElem = _createFrame(provider, embedId)
  block.replaceWith(embedFrameElem)
}

function _createFrame(provider, embedId) {
  const embedFrameElem = document.createElement('iframe')
  embedFrameElem.setAttribute('allowfullscreen', '')
  embedFrameElem.setAttribute('frameborder', '0')
  if (provider === 'youtube') {
    embedFrameElem.setAttribute(
      'src',
      `https://www.youtube.com/embed/${embedId}?rel=0&enablejsapi=1`
    )
  } else {
    // Leaving blank for now
  }
  return embedFrameElem
}