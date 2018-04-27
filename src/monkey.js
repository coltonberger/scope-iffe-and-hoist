function monkey () {
  var phrase = ''

  // Only change the lines inside of the following functions
  // Lines 7, 11, and 15
  function seeNoEvil (text) {
    phrase += 'See No Evil; '
  }

  function hearNoEvil (text) {
    phrase += 'Hear No Evil; '
  }

  function speakNoEvil (text) {
    phrase += 'Speak No Evil.'
  }

  seeNoEvil()
  hearNoEvil()
  speakNoEvil()

  return phrase
}

module.exports = monkey()

//removed var infront of each phrase
