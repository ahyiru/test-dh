#!/bin/bash

forever start admin.js&&forever start doc.js&&forever start ../landing/app.js&&forever start ../playground/app.js