# BMW K Service Book

Independent offline-first service log and technical reference for BMW K-series motorcycles through 1995. It is a separate project from BMW E34 Service Book and is not affiliated with BMW AG.

## Run locally

Serve this directory over HTTP (for example, `python -m http.server 8000`) and open `http://localhost:8000`. The app uses browser local storage and a service worker; it does not require a build step, account, or remote API.

## Technical data policy

The initial garage profile is prefilled with the user-confirmed BMW K75 S, 1987, European market. Exact odometer, manufacture date, ABS, gearbox and final-drive identifiers remain blank or pending.

For K75, the project prioritizes the K75 1986–1991 article in *Moto Técnica* No. 14 (1996): fluid data on pp. 7–9, service intervals on p. 26, and torque tables on pp. 49, 54, 74, 89 and 91. This is an independent technical magazine, not official BMW AG documentation. Capacities for engine, gearbox and final drive are grouped across K75 body variants; fork quantities remain suspension-specific. Haynes 1988 is cited as a secondary cross-check. The 1994 US Rider’s Manual lists different gearbox/final-drive capacities; they are not applied to the 1987 European K75 S.

The K75 base plan uses the *Moto Técnica* interval table in kilometres, with calendar intervals where given. It starts at the exact current odometer and creation date; it does not infer the last completed service. Conditional items (such as ABS and rear drum brakes) are included only when the garage profile identifies that equipment/configuration. Verify the plan against the applicable manual and service history.

For 1983–1988 K100 2-valve models, Haynes 1988 provides secondary fluid references. K100 4-valve, K1 and K1100 capacities/intervals remain pending rather than being inferred from another engine. The one-page K75/K100 torque chart is an unverified secondary reference and is shown only for K100 2-valve models; the K75 torque table uses *Moto Técnica* values converted from m.daN to Nm. Neither source is an official BMW specification.

The interface supports Spanish and English. Records, VIN, and photos remain on this device. JSON backup/restore and CSV service-history export are available in the garage settings. A VIN is optional and is not sent to any service; local decoding is pending a reliable reference table.

The technical library displays one sheet for the active motorcycle in the garage. It includes the three PDFs supplied by the owner, with authorization to publish them confirmed by the user:

- `manuales/instrucciones-es.pdf`
- `manuales/agenda-mantenimiento-en.pdf`
- `manuales/k75-riders-manual-1994-us-en.pdf`

Documents are opened in their original language. Full responses are cached by the service worker when available; the PDF reader or download link should be used once online before relying on a copy offline. The app is developed by Sr. Balloneta.

## Reference photo

The temporary cover photo is “BMW K75S”, a 1991 BMW K75S photographed by Marc Mongenet, from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:BMW_K75S.jpg), licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). It is not the user's motorcycle.
