// Replace your existing clanData array with this corrected version
const clanData = [
    { 
        id: "armstrong", 
        name: "Clan Armstrong", 
        motto: "Invictus Maneo", 
        lore: "A powerful and feared Border Reiver clan.", 
        seat: { lat: 55.175, lng: -2.863 }, 
        emblems: { 
            traditional: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/traditional/armstrong-emblem.jpg", 
            modern: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/modern/armstrong-emblem.jpg", 
            celtic: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/celtic/armstrong-emblem.jpg" 
        }, 
        tartan: { 
            image: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/tartans/armstrong.jpg"
        } 
    },
    { 
        id: "cameron", 
        name: "Clan Cameron", 
        motto: "Aonaibh ri Chéile", 
        lore: "A fierce Lochaber clan, loyal Jacobites.", 
        seat: { lat: 56.879, lng: -5.074 }, 
        emblems: { 
            traditional: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/traditional/cameron-emblem.jpg", 
            modern: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/modern/cameron-emblem.jpg", 
            celtic: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/celtic/cameron-emblem.jpg" 
        }, 
        tartan: { 
            image: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/tartans/cameron.jpg"
        } 
    },
    { 
        id: "campbell", 
        name: "Clan Campbell", 
        motto: "Ne Obliviscaris", 
        lore: "One of the largest and most powerful Highland clans.", 
        seat: { lat: 56.234, lng: -5.072 }, 
        emblems: { 
            traditional: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/traditional/campbell-emblem.jpg", 
            modern: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/modern/campbell-emblem.jpg", 
            celtic: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/celtic/campbell-emblem.jpg" 
        }, 
        tartan: { 
            image: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/tartans/campbell.jpg"
        } 
    },
    { 
        id: "carnegie", 
        name: "Clan Carnegie", 
        motto: "Tache Sans Tache", 
        lore: "A noble family who held the Dukedom of Fife.", 
        seat: { lat: 56.716, lng: -2.578 }, 
        emblems: { 
            traditional: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/traditional/carnegie-emblem.jpg", 
            modern: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/modern/carnegie-emblem.jpg", 
            celtic: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/celtic/carnegie-emblem.jpg" 
        }, 
        tartan: { 
            image: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/tartans/carnegie.jpg"
        } 
    },
    { 
        id: "chattan", 
        name: "Clan Chattan", 
        motto: "Touch not the cat bot a glove", 
        lore: "A powerful confederation of Highland clans.", 
        seat: { lat: 57.135, lng: -4.054 }, 
        emblems: { 
            traditional: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/traditional/chattan-emblem.jpg", 
            modern: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/modern/chattan-emblem.jpg", 
            celtic: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/celtic/chattan-emblem.jpg" 
        }, 
        tartan: { 
            image: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/tartans/chattan.jpg"
        } 
    },
    { 
        id: "cunningham", 
        name: "Clan Cunningham", 
        motto: "Over Fork Over", 
        lore: "An Ayrshire clan with a long and storied history.", 
        seat: { lat: 55.637, lng: -4.753 }, 
        emblems: { 
            traditional: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/traditional/cunningham-emblem.jpg", 
            modern: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/modern/cunningham-emblem.jpg", 
            celtic: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/celtic/cunningham-emblem.jpg" 
        }, 
        tartan: { 
            image: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/tartans/cunningham.jpg"
        } 
    },
    { 
        id: "donald", 
        name: "Clan Donald", 
        motto: "Per Mare Per Terras", 
        lore: "The Lords of the Isles, a great and powerful clan.", 
        seat: { lat: 57.412, lng: -6.707 }, 
        emblems: { 
            traditional: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/traditional/donald-emblem.jpg", 
            modern: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/modern/donald-emblem.jpg", 
            celtic: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/celtic/donald-emblem.jpg" 
        }, 
        tartan: { 
            image: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/tartans/donald.jpg"
        } 
    },
    { 
        id: "douglas", 
        name: "Clan Douglas", 
        motto: "Jamais Arrière", 
        lore: "A powerful Lowland family, often rivals to the throne.", 
        seat: { lat: 55.776, lng: -3.883 }, 
        emblems: { 
            traditional: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/traditional/douglas-emblem.jpg", 
            modern: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/modern/douglas-emblem.jpg", 
            celtic: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/celtic/douglas-emblem.jpg" 
        }, 
        tartan: { 
            image: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/tartans/douglas.jpg"
        } 
    },
    { 
        id: "eliott", 
        name: "Clan Eliott", 
        motto: "Fortiter Et Recte", 
        lore: "A Border Reiver clan known for their strength.", 
        seat: { lat: 55.267, lng: -2.812 }, 
        emblems: { 
            traditional: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/traditional/eliott-emblem.jpg", 
            modern: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/modern/eliott-emblem.jpg", 
            celtic: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/celtic/eliott-emblem.jpg" 
        }, 
        tartan: { 
            image: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/tartans/eliott.jpg"
        } 
    },
    { 
        id: "erskine", 
        name: "Clan Erskine", 
        motto: "Je Pense Plus", 
        lore: "Guardians of Scottish kings and queens.", 
        seat: { lat: 56.115, lng: -3.793 }, 
        emblems: { 
            traditional: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/traditional/erskine-emblem.jpg", 
            modern: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/modern/erskine-emblem.jpg", 
            celtic: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/celtic/erskine-emblem.jpg" 
        }, 
        tartan: { 
            image: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/tartans/erskine.jpg"
        } 
    },
    { 
        id: "fraser", 
        name: "Clan Fraser", 
        motto: "Je Suis Prest", 
        lore: "A powerful Highland clan of Norman origin.", 
        seat: { lat: 57.383, lng: -4.483 }, 
        emblems: { 
            traditional: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/traditional/fraser-emblem.jpg", 
            modern: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/modern/fraser-emblem.jpg", 
            celtic: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/celtic/fraser-emblem.jpg" 
        }, 
        tartan: { 
            image: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/tartans/fraser.jpg"
        } 
    },
    { 
        id: "gordon", 
        name: "Clan Gordon", 
        motto: "Bydand", 
        lore: "The 'Cock o' the North', powerful in the northeast.", 
        seat: { lat: 57.449, lng: -2.859 }, 
        emblems: { 
            traditional: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/traditional/gordon-emblem.jpg", 
            modern: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/modern/gordon-emblem.jpg", 
            celtic: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/celtic/gordon-emblem.jpg" 
        }, 
        tartan: { 
            image: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/tartans/gordon.jpg"
        } 
    },
    { 
        id: "graham", 
        name: "Clan Graham", 
        motto: "Ne Oublie", 
        lore: "A clan known for its great military leaders.", 
        seat: { lat: 56.095, lng: -4.316 }, 
        emblems: { 
            traditional: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/traditional/graham-emblem.jpg", 
            modern: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/modern/graham-emblem.jpg", 
            celtic: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/celtic/graham-emblem.jpg" 
        }, 
        tartan: { 
            image: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/tartans/graham.jpg"
        } 
    },
    { 
        id: "grant", 
        name: "Clan Grant", 
        motto: "Stand Fast", 
        lore: "A prominent Highland clan.", 
        seat: { lat: 57.320, lng: -3.593 }, 
        emblems: { 
            traditional: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/traditional/grant-emblem.jpg", 
            modern: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/modern/grant-emblem.jpg", 
            celtic: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/celtic/grant-emblem.jpg" 
        }, 
        tartan: { 
            image: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/tartans/grant.jpg"
        } 
    },
    { 
        id: "guthrie", 
        name: "Clan Guthrie", 
        motto: "Sto Pro Veritate", 
        lore: "An Angus clan with a history of royal service.", 
        seat: { lat: 56.666, lng: -2.574 }, 
        emblems: { 
            traditional: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/traditional/guthrie-emblem.jpg", 
            modern: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/modern/guthrie-emblem.jpg", 
            celtic: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/celtic/guthrie-emblem.jpg" 
        }, 
        tartan: { 
            image: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/tartans/guthrie.jpg"
        } 
    },
    { 
        id: "leslie", 
        name: "Clan Leslie", 
        motto: "Grip Fast", 
        lore: "A noble family with origins in Hungary.", 
        seat: { lat: 57.320, lng: -2.850 }, 
        emblems: { 
            traditional: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/traditional/leslie-emblem.jpg", 
            modern: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/modern/leslie-emblem.jpg", 
            celtic: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/celtic/leslie-emblem.jpg" 
        }, 
        tartan: { 
            image: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/tartans/leslie.jpg"
        } 
    },
    { 
        id: "lindsay", 
        name: "Clan Lindsay", 
        motto: "Endure Fort", 
        lore: "A noble family of Norman origin.", 
        seat: { lat: 56.840, lng: -2.610 }, 
        emblems: { 
            traditional: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/traditional/lindsay-emblem.jpg", 
            modern: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/modern/lindsay-emblem.jpg", 
            celtic: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/celtic/lindsay-emblem.jpg" 
        }, 
        tartan: { 
            image: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/tartans/lindsay.jpg"
        } 
    },
    { 
        id: "macdougall", 
        name: "Clan MacDougall", 
        motto: "Buaidh No Bas", 
        lore: "Descendants of Somerled, Lords of Lorn.", 
        seat: { lat: 56.417, lng: -5.474 }, 
        emblems: { 
            traditional: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/traditional/macdougall-emblem.jpg", 
            modern: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/modern/macdougall-emblem.jpg", 
            celtic: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/celtic/macdougall-emblem.jpg" 
        }, 
        tartan: { 
            image: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/tartans/macdougall.jpg"
        } 
    },
    { 
        id: "macgregor", 
        name: "Clan MacGregor", 
        motto: "'S Rioghal Mo Dhream", 
        lore: "The Children of the Mist, a proscribed clan.", 
        seat: { lat: 56.376, lng: -4.482 }, 
        emblems: { 
            traditional: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/traditional/macgregor-emblem.jpg", 
            modern: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/modern/macgregor-emblem.jpg", 
            celtic: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/celtic/macgregor-emblem.jpg" 
        }, 
        tartan: { 
            image: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/tartans/macgregor.jpg"
        } 
    },
    { 
        id: "mackenzie", 
        name: "Clan MacKenzie", 
        motto: "Luceo Non Uro", 
        lore: "A powerful Highland clan.", 
        seat: { lat: 57.273, lng: -5.516 }, 
        emblems: { 
            traditional: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/traditional/mackenzie-emblem.jpg", 
            modern: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/modern/mackenzie-emblem.jpg", 
            celtic: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/celtic/mackenzie-emblem.jpg" 
        }, 
        tartan: { 
            image: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/tartans/mackenzie.jpg"
        } 
    },
    { 
        id: "mackintosh", 
        name: "Clan Mackintosh", 
        motto: "Touch not the cat bot a glove", 
        lore: "Leaders of the Clan Chattan confederation.", 
        seat: { lat: 57.433, lng: -4.050 }, 
        emblems: { 
            traditional: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/traditional/mackintosh-emblem.jpg", 
            modern: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/modern/mackintosh-emblem.jpg", 
            celtic: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/celtic/mackintosh-emblem.jpg" 
        }, 
        tartan: { 
            image: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/tartans/mackintosh.jpg"
        } 
    },
    { 
        id: "macleod", 
        name: "Clan MacLeod", 
        motto: "Hold Fast", 
        lore: "A powerful clan of the Hebrides.", 
        seat: { lat: 57.412, lng: -6.707 }, 
        emblems: { 
            traditional: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/traditional/macleod-emblem.jpg", 
            modern: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/modern/macleod-emblem.jpg", 
            celtic: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/celtic/macleod-emblem.jpg" 
        }, 
        tartan: { 
            image: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/tartans/macleod.jpg"
        } 
    },
    { 
        id: "macpherson", 
        name: "Clan Macpherson", 
        motto: "Touch not the cat bot a glove", 
        lore: "A prominent member of the Clan Chattan.", 
        seat: { lat: 57.068, lng: -4.032 }, 
        emblems: { 
            traditional: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/traditional/macpherson-emblem.jpg", 
            modern: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/modern/macpherson-emblem.jpg", 
            celtic: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/celtic/macpherson-emblem.jpg" 
        }, 
        tartan: { 
            image: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/tartans/macpherson.jpg"
        } 
    },
    { 
        id: "murray", 
        name: "Clan Murray", 
        motto: "Tout Prest", 
        lore: "A powerful family, Dukes of Atholl.", 
        seat: { lat: 56.772, lng: -3.738 }, 
        emblems: { 
            traditional: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/traditional/murray-emblem.jpg", 
            modern: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/modern/murray-emblem.jpg", 
            celtic: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/celtic/murray-emblem.jpg" 
        }, 
        tartan: { 
            image: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/tartans/murray.jpg"
        } 
    },
    { 
        id: "ogilvy", 
        name: "Clan Ogilvy", 
        motto: "A Fin", 
        lore: "A noble Angus clan.", 
        seat: { lat: 56.671, lng: -3.008 }, 
        emblems: { 
            traditional: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/traditional/ogilvy-emblem.jpg", 
            modern: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/modern/ogilvy-emblem.jpg", 
            celtic: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/celtic/ogilvy-emblem.jpg" 
        }, 
        tartan: { 
            image: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/tartans/ogilvy.jpg"
        } 
    },
    { 
        id: "ramsay", 
        name: "Clan Ramsay", 
        motto: "Ora Et Labora", 
        seat: { lat: 56.002, lng: -3.076 }, 
        emblems: { 
            traditional: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/traditional/ramsay-emblem.jpg", 
            modern: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/modern/ramsay-emblem.jpg", 
            celtic: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/celtic/ramsay-emblem.jpg" 
        }, 
        tartan: { 
            image: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/tartans/ramsay.jpg"
        } 
    },
    { 
        id: "sinclair", 
        name: "Clan Sinclair", 
        motto: "Commit Thy Work to God", 
        lore: "Earls of Orkney and Caithness.", 
        seat: { lat: 58.587, lng: -3.064 }, 
        emblems: { 
            traditional: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/traditional/sinclair-emblem.jpg", 
            modern: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/modern/sinclair-emblem.jpg", 
            celtic: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/celtic/sinclair-emblem.jpg" 
        }, 
        tartan: { 
            image: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/tartans/sinclair.jpg"
        } 
    },
    { 
        id: "stewart", 
        name: "Clan Stewart", 
        motto: "Virescit Vulnere Virtus", 
        lore: "The Royal House of Scotland.", 
        seat: { lat: 56.123, lng: -3.948 }, 
        emblems: { 
            traditional: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/traditional/stewart-emblem.jpg", 
            modern: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/modern/stewart-emblem.jpg", 
            celtic: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/celtic/stewart-emblem.jpg" 
        }, 
        tartan: { 
            image: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/tartans/stewart.jpg"
        } 
    },
    { 
        id: "wallace", 
        name: "Clan Wallace", 
        motto: "Pro Libertate", 
        lore: "The clan of Scotland's national hero.", 
        seat: { lat: 55.883, lng: -4.433 }, 
        emblems: { 
            traditional: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/traditional/wallace-emblem.jpg", 
            modern: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/modern/wallace-emblem.jpg", 
            celtic: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/celtic/wallace-emblem.jpg" 
        }, 
        tartan: { 
            image: "https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/tartans/wallace.jpg"
        } 
    }
];

// Also update your showClanDetails function to include error handling for images
function showClanDetails(clanId) { 
    const clan = clanData.find(c => c.id === clanId);
    const mainContent = document.getElementById('clans-main-content');
    mainContent.innerHTML = `
        <div class="animate-fade-in grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="lg:col-span-2">
                 <div id="clanMap" class="w-full h-96 lg:h-full rounded-lg shadow-lg"></div>
            </div>
            <div id="clan-dossier" class="lg:col-span-1">
                <h3 class="text-3xl font-bold font-title">${clan.name}</h3>
                <p class="font-semibold text-stone-600 italic mb-4">${clan.motto}</p>
                <div class="mt-4 border-b border-stone-200">
                    <nav class="-mb-px flex space-x-2" aria-label="Tabs">
                        <button class="tab-button whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm active" data-tab="lore">Lore</button>
                        <button class="tab-button whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm" data-tab="emblems">Emblems</button>
                        <button class="tab-button whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm" data-tab="tartan">Tartan</button>
                    </nav>
                </div>
                <div class="mt-4">
                    <div id="lore-tab" class="tab-content active space-y-2 text-sm">${clan.lore || 'Details coming soon.'}</div>
                    <div id="emblems-tab" class="tab-content">
                        <div class="grid grid-cols-3 gap-2">
                            <div>
                                <img src="${clan.emblems.traditional}" 
                                     alt="Traditional Emblem" 
                                     class="w-full rounded-md"
                                     onerror="this.src='https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/fallback-emblem.jpg'; this.alt='Image not available';">
                                <p class="text-xs text-center mt-1">Traditional</p>
                            </div>
                            <div>
                                <img src="${clan.emblems.modern}" 
                                     alt="Modern Emblem" 
                                     class="w-full rounded-md"
                                     onerror="this.src='https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/fallback-emblem.jpg'; this.alt='Image not available';">
                                <p class="text-xs text-center mt-1">Modern</p>
                            </div>
                            <div>
                                <img src="${clan.emblems.celtic}" 
                                     alt="Celtic Emblem" 
                                     class="w-full rounded-md"
                                     onerror="this.src='https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/embelms/fallback-emblem.jpg'; this.alt='Image not available';">
                                <p class="text-xs text-center mt-1">Celtic</p>
                            </div>
                        </div>
                    </div>
                    <div id="tartan-tab" class="tab-content">
                        <img src="${clan.tartan.image}" 
                             alt="${clan.name} Tartan" 
                             class="w-full rounded-md mb-2"
                             onerror="this.src='https://raw.githubusercontent.com/kenmck3772/theclanhearth.com/main/assets/images/tartans/fallback-tartan.jpg'; this.alt='Image not available';">
                        <p class="text-sm">${clan.tartan.description || ''}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // ... rest of your existing code for tabs and map initialization
}
