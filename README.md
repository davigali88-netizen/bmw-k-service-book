# BMW K Service Book

Independent offline-first service log and technical reference for BMW K-series motorcycles through 1995. It is a separate project from BMW E34 Service Book and is not affiliated with BMW AG.

## Run locally

Serve this directory over HTTP (for example, `python -m http.server 8000`) and open `http://localhost:8000`. The app uses browser local storage and a service worker; it does not require a build step, account, or remote API.

## Technical data policy

The initial garage profile is prefilled with the user-confirmed BMW K75 S, 1987, European market. Exact odometer, manufacture date, ABS, gearbox and final-drive identifiers remain blank or pending.

The library compares the owner-supplied K-Models schedule with the personal `K_Bike_General_Maintenance_V1.3` guide (dws, 2019). Both are secondary sources; some intervals differ, and neither confirms applicability to this exact motorcycle. The base plan uses only the K-Models schedule, starts from the exact current odometer, uses the lower end of published ranges, and does not infer the last completed service. Confirm it against applicable BMW documentation and service history before relying on generated reminders.

The one-page K75/K100 torque chart is also secondary and is displayed as an unverified cross-reference, not a BMW specification. Fluid capacities and exact BMW-approved specifications remain pending. The 1994 US K75 rider's manual and K1100-specific documentation are not treated as proof for a 1987 European K75 S.

The interface supports Spanish and English. Records, VIN, and photos remain on this device. JSON backup/restore and CSV service-history export are available in the garage settings. A VIN is optional and is not sent to any service; local decoding is pending a reliable reference table.

The technical library displays one sheet for the active motorcycle in the garage. It includes the three PDFs supplied by the owner, with authorization to publish them confirmed by the user:

- `manuales/instrucciones-es.pdf`
- `manuales/agenda-mantenimiento-en.pdf`
- `manuales/k75-riders-manual-1994-us-en.pdf`

Documents are opened in their original language. Full responses are cached by the service worker when available; the PDF reader or download link should be used once online before relying on a copy offline. The app is developed by Sr. Balloneta.

## Reference photo

The temporary cover photo is “BMW K75S”, a 1991 BMW K75S photographed by Marc Mongenet, from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:BMW_K75S.jpg), licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). It is not the user's motorcycle.
