import process from "https://deno.land/std@0.111.0/node/process.ts";
#!/usr/bin/env node

import { emitWarningIfUnsupportedVersion } from "./emitWarningIfUnsupportedVersion.ts";
emitWarningIfUnsupportedVersion(process.version);
