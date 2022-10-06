
author "Andyyy#7666"
description "Taximeter for ND_Core"
version "1.0.0"

fx_version "cerulean"
game "gta5"
lua54 "yes"

files {
    "ui/**"
}
ui_page "ui/index.html"

shared_script "config.lua"
client_script {
    "client/**"
}

-- dependency "ND_Core"
