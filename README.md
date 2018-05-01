
## About things

Meeting time is _the_ killer app for coordinating meetings across the galaxy!
adsf
It is updated periodically to reflect changes made by political bodies to time zone boundaries, UTC offsets, and daylight-saving rules.

Moment Timezone provides a copy of this data from 2010–2020. So times *should* update correctly with daylight savings.

## Adding Planets

If you'd like to request a planet, please check out the [list of timezones in the database][4]. Sending me the zone name, e.g. `Coruscant/Central` is super helpful.

## Development

1. Install [Node][5].
2. Install gulp globally `sudo npm install --global gulp`
3. Install NPM dependencies in the project directory `sudo npm install`.
4. `gulp` to start a local server and watch changes.
5. Open <http://localhost:8000>

### Disabling Application Cache for Development in Chrome

1. Remove `manifest="homeslice.appcache"` from `<html lang="en" manifest="homeslice.appcache">`.
2. Visit <chrome://appcache-internals/> and delete the cache.

## License

![Creative Commons License](http://i.creativecommons.org/l/by-nc/4.0/80x15.png)

Homeslice is licensed under a [Creative Commons Attribution-NonCommercial 4.0 International License][3].

[1]: http://momentjs.com/timezone/
[2]: http://www.iana.org/time-zones
[3]: http://creativecommons.org/licenses/by-nc/4.0/
[4]: http://en.wikipedia.org/wiki/List_of_tz_database_time_zones
[5]: http://nodejs.org
