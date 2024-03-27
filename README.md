# dndworld

This project is a custom Wiki for our D&D game built with [Astro](https://astro.build/).

## 🚀 Project Structure

Inside of the project, you'll see the following folders and files:

```text
/
├── public/
│   └── ... this is a folder for assets
├── src/
│   ├── components/
│   │   └── ... this is a folder for all Astro Components
│   ├── content/
│   │   └── ... this is a folder holds Astro Content Collections
│   ├── layouts/
│   │   └── ... this folder holds Astro Layouts for the app
│   └── pages/
│       └── ... this folder holds Astro Pages
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

References:
* [Astro Components](https://docs.astro.build/en/basics/astro-components/)
* [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
* [Astro Layouts](https://docs.astro.build/en/basics/layouts/)
* [Astro Pages](https://docs.astro.build/en/basics/astro-pages/)

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🗺️ Maps implementation

Maps are implemented using the [openlayers](https://openlayers.org/) library.

To generate the tiles for the openlayers from the map image I used [gdal2tiles.py](https://gdal.org/programs/gdal2tiles.html) gdal python binding.
For Windows you can install [gdal](https://gdal.org/index.html) and gdal python bindings using [osgeo4w](https://www.osgeo.org/projects/osgeo4w/).

To generate the tiles from an image you must run the following command:

```sh
C:\OSGeo4W\apps\Python39\Scripts>python gdal2tiles.py -p raster -s EPSG:4326 map.jpg output_directory
```
