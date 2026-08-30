---
title: "Reconstructing the 2026 Rasuwa Flood — Part 6: Satellite Imagery"
slug: rasuwa-flood-2026-series-part-6-satellite-imagery
excerpt: "The remote-sensing record behind the reconstruction — PlanetScope, Pelican, SkySat, Sentinel-2, Landsat 9 and Copernicus EMSR927 — with the acquisition dates, resolutions and limitations that matter for change detection."
date: 2026-08-30
category: "Disaster Risk Reduction"
tags:
  - Disaster Risk Reduction
  - GIS & Remote Sensing
  - Satellite Imagery
  - Event Reconstruction
author: Sandip Acharya
---

*This is Part 6 of a series reconstructing the Rasuwa–Bhote Koshi–Trishuli flood of 26 August 2026. Start with the [full overview](/blog/rasuwa-flood-2026-series-overview), or read [Part 5: Sources](/blog/rasuwa-flood-2026-series-part-5-sources).*

## Purpose

This part records satellite imagery useful for reconstructing the event, its source, downstream effects, and the immediate aftermath.

## Planet Crisis Response

### Post-event PlanetScope

- Date: 26 August 2026
- Acquisition windows: approximately 05:01 UTC and 05:45 UTC
- Resolution: ~3.8 m GSD
- Products: visual RGB, analytic TOA radiance, UDM2
- Limitation: severe cloud cover; clear fractions reported at only about 2–14% by scene
- Best documented scenes: `20260826_050125_99_255f` and `20260826_050135_34_255f`

Catalog:
https://source.coop/planet/disasterdata/nepal-flash-flood-2026-08-26

### PlanetScope pre-event baseline

- Date: 27 May 2026
- Coverage: Trishuli Bazaar north through Betrawati, Dhunche, Syabrubesi and Rasuwagadhi
- Useful for before/after visual comparison
- Cloud conditions are substantially better than the 26 August post-event PlanetScope imagery in some scenes

## Planet Pelican

- Date: 27 August 2026
- Resolution: ~0.55 m
- Public post-event scenes include:
  - `20260827_060956_98_3009`
  - `20260827_060958_31_3009`
  - `20260827_060959_65_3009`
- Products include visual TIFF, pansharpened TIFF, UDM2 and metadata.
- Use thumbnails first to determine cloud/scene usefulness before downloading very large rasters.

Catalog:
https://source.coop/planet/disasterdata/nepal-flash-flood-2026-08-26/post-event/pelican-2026-08-27/items

## Planet SkySat

- Date: 27 August 2026
- Resolution: ~0.8 m focal scenes
- Documented scenes include:
  - `20260827_020055_ssc1_u0001`
  - `20260827_020055_ssc1_u0002`
- Best suited to high-resolution visual interpretation of buildings and infrastructure where cloud permits.

Catalog:
https://source.coop/planet/disasterdata/nepal-flash-flood-2026-08-26/post-event/2026-08-27/items

## Sentinel-2

- Post-event acquisition: 27 August 2026
- Resolution: 10 m for key visible bands
- Best suited to corridor-scale mapping of water/sediment and channel change, subject to cloud.
- NESRA Rapid EO Assessment v1 uses a 27 August Sentinel-2 acquisition and warns that about 4.1 km of river remains under solid cloud, so mapped extent must not be treated as the full true impact extent.

Copernicus Data Space:
https://browser.dataspace.copernicus.eu/

NESRA rapid assessment:
https://nesraspace.org/floodwatch/rasuwa-2026/

## Landsat 9

- Event-date imagery exists for 26 August 2026.
- Resolution: 15 m panchromatic / 30 m multispectral.
- Useful mainly for broad-scale context and independent comparison.

## High-resolution emergency mapping

### Copernicus EMS

Copernicus EMSR927 includes high-resolution post-event mapping for the affected upper corridor, including 27 August WorldView-3 imagery for damage grading around Timure/Syabrubesi.

Emergency mapping:
https://mapping.emergency.copernicus.eu/news/flood-in-nepal-emsr927/

## Satellite-use notes

1. Optical imagery is affected by cloud, haze and shadows.
2. A cloudy scene cannot be treated as showing no damage.
3. Visual TIFFs are useful for interpretation; analytical products need attention to processing level before quantitative differencing.
4. For building damage, use very-high-resolution imagery and pre-event reference imagery.
5. For flood extent under cloud, SAR is preferable when a validated post-event acquisition is available.
6. Satellite-derived damage remains preliminary until field verified.

---

**Series complete.** Return to the [full overview](/blog/rasuwa-flood-2026-series-overview) or browse [all articles](/blog).