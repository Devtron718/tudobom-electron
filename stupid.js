// step 1:
  // setup local store for a note (button to save text and window attrs)
    // save when: lose focus, window closed,
    // every 5 seconds while working
    // maybe do these saves in a separate process
// step 2:
  // set up local storage retrieval:
    // iterate through localStorage fetched notes,
    // and spawn a window per note
// step 3:
  // set up background server fetch
  // and then when fetched, notification to update current notes
// step 4:
  // post current notes to server (to compare whether weve already saved these)
  // then replace current notes with the fetched ones
// step 5:
// there should be some ui to see evolution of a note




# do we send requests async on every keystroke?
# and when do we pull in new data?

# POST:
when?
  timer
  or per keystroke
    seems a little heavy-handed, and like a battery sink

  maybe 2 options?
    if auto-update, we send per keystroke (maybe)
    2 buttons to save and pull are always there

# UPDATE:
on app open
manual refresh
maybe keep a socket open?
