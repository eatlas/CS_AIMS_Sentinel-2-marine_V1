These folders contain composite Sentinel 2 imagery for 31 tiles in the Coral Sea and 54 tiles for selected regions around the globe. 
For more details see the [full metadata for this data](https://eatlas.org.au/data/uuid/08aad1bf-dbde-4d16-8c3c-d92f7f855184). 
Each of the tiles codes (such as 55KEB) can be looked up on this [map of Sentinel 2 tiles](https://maps.eatlas.org.au/index.html?intro=false&z=7&ll=148.84595,-17.71766&l0=ea_ref%3AWorld_ESA_Sentinel-2-tiling-grid_Poly,ea_ea-be%3AWorld_Bright-Earth-e-Atlas-basemap,google_HYBRID,google_SATELLITE&v0=,,f,f).
- `R1` - Composites made from the best imagery
- `R2` - Composites made from next best imagery 
- `DeepFalse` - False colour for best for viewing deep reef features
- `DeepMarine` - Contrast enhance true colour to focus on darker deep features
- `Slope` - Slope estimate (edge detection) applied to the blue, green and red channels.
- `ReefTop` - Black and white mask of reef tops (4 - 5 m depth)
- `Shallow` - False colour showing shallow (< 3 m) and dry areas.
- `TrueColour` - True colour imagery
