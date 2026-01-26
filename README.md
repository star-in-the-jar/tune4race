## Guidelines
- Project is currently being developed on develop branch (master is out-of-date).
- Prod updates are made using sftp:
    ```
    npm run build
    sftp tune4race
    put -r /path-to-repo/out/* /home/tuneraceal/www/
    ```
Changes will be visible up to a few minutes.

## License
This project is proprietary and not for public distribution.

# Third-Party Licenses
## Material Design Icons (Apache License 2.0)
This project includes Material Design icons, licensed under the Apache License, Version 2.0.
You may obtain a copy of the license at: http://www.apache.org/licenses/LICENSE-2.0

No modifications have been made to the original icons. They are used as provided by Google.
