#!/bin/bash

forever start admin.js&&forever start doc.js&&forever start ../landingpage/app.js&&forever start ../playground/app.js