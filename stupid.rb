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
