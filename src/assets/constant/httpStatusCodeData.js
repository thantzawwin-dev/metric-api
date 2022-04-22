export default {
  bgColors: {
    "0xx": '#494141', //Default
    // "1": '#ef34ba', //Informational responses 
    // "2": '#1af660', //Successful responses
    // "3": '#2D74FF', //Redirection messages
    // "4": '#ff732d', //Client error responses
    // "5": '#EB5757', //Server error responses

    // 1xx Informational (100–199)
    100: "#DCDCDC", // Gainsboro / #DCDCDC
    101: "#C0C0C0", // Silver / #C0C0C0
    102: "#808080", // Gray / Grey / #808080
    103: "#708090", // Slategray / Slategrey / #708090
    // default
    '1xx': "#DCDCDC", // Gainsboro / #DCDCDC

    // 2xx Succesful (200–299)
    200: "#00FF00", // Lime / 00FF00
    201: "#00FF7F", // SpringGreen / 00FF7F
    202: "#00FA9A", // MediumSpringGreen / 00FA9A
    203: "#32CD32", // LimeGreen / 32CD32
    204: "#66CDAA", // MediumAquamarine / 66CDAA
    205: "#9ACD32", // YellowGreen / 9ACD32
    206: "#7FFF00", // Chartreuse / 7FFF00
    207: "#90EE90", // LightGreen / 90EE90
    208: "#ADFF2F", // GreenYellow / ADFF2F
    226: "#3CB371", // MediumSeaGreen / 3CB371
    // default
    '2xx': "#00FF00", // Lime / 00FF00

    // 3xx Redirection (300–399)
    300: "#0000CD", // MediumBlue / 0000CD
    301: "#0000FF", // Blue / 0000FF
    302: "#4169E1", // RoyalBlue / 4169E1
    303: "#4682B4", // SteelBlue / 4682B4
    304: "#1E90FF", // DodgerBlue / 1E90FF
    305: "#00BFFF", // DeepSkyBlue / 00BFFF
    306: "#6495ED", // CornflowerBlue / 6495ED
    307: "#87CEFA", // LightSkyBlue / 87CEFA
    308: "#B0C4DE", // LightSteelBlue / B0C4DE
    // default
    '3xx': "#0000CD", // MediumBlue / 0000CD

    // 4xx Client Error (400–499)
    400: "#FF3131", // Neon Red / #FF3131
    401: "#A52A2A", // Brown / #A52A2A
    402: "#880808", // Blood Red / #880808
    403: "#AA4A44", // Brick Red / #AA4A44
    404: "#DC143C", // Crimson / #DC143C
    405: "#800020", // Burgundy / #800020
    406: "#6E260E", // Burnt Umber / #6E260E
    407: "#E97451", // BurntSienna / #E97451
    408: "#D22B2B", // Cadmium Red / #D22B2B
    409: "#C41E3A", // Cardinal Red / #C41E3A
    410: "#D70040", // Carmine / #D70040
    411: "#DE3163", // Cerise / #DE3163
    412: "#D2042D", // Cherry / #D2042D
    413: "#811331", // Claret / #811331
    414: "#F88379", // Coral Pink / #F88379
    415: "#814141", // Cordovan / #814141
    416: "#8B0000", // Dark Red / #8B0000
    417: "#7B1818", // Falu Red / #7B1818
    418: "#9A2A2A", // Garnet / #9A2A2A
    421: "#770737", // Mulberry / #770737
    422: "#FAA0A0", // Pastel Red / #FAA0A0
    423: "#E30B5C", // Raspberry / #E30B5C
    424: "#A52A2A", // Red Brown / #A52A2A
    425: "#953553", // Red Purple / #953553
    426: "#C21E56", // Rose Red / #C21E56
    428: "#E0115F", // Ruby Red / #E0115F
    429: "#FA8072", // Salmon / #FA8072
    431: "#E3735E", // Terra Cotta / #E3735E
    444: "#B22222", // Firebrick / #B22222
    451: "#A42A04", // Venetian Red / #A42A04
    449: "#800000", // Maroon / #800000
    // default
    '4xx': "#FF3131", // Neon Red / #FF3131

    // 5xx Server Error (500–599)
    500: "#FF5F1F", // Neon Orange	#FF5F1F
    501: "#EC5800", // Persimmon	#EC5800
    502: "#E35335", // Poppy	#E35335
    503: "#FF7518", // Pumpkin Orange	#FF7518
    504: "#FFBF00", // Amber	#FFBF00
    505: "#FFAA33", // Yellow Orange	#FFAA33
    506: "#FFA500", // Orange	#FFA500
    507: "#F4BB44", // Mango	#F4BB44
    508: "#FFC000", // Golden Yellow	#FFC000
    510: "#F28C28", // Cadmium Orange	#F28C28
    511: "#FFAC1C", // Bright Orange	#FFAC1C
    599: "#FF8C00", // Dark Orange #FF8C00
    // default
    '5xx': "#FF5F1F", // Neon Orange	#FF5F1F
  },
  HttpStatusCode: {
    // 1xx Informational
    100: 'Continue',
    101: 'Switching protocols',
    102: 'Processing',
    103: 'Early Hints',
    // 2xx Succesful
    200: 'OK',
    201: 'Created',
    202: 'Accepted',
    203: 'Non-Authoritative Information',
    204: 'No Content',
    205: 'Reset Content',
    206: 'Partial Content',
    207: 'Multi-Status',
    208: 'Already Reported',
    226: 'IM Used',
    // 3xx Redirection
    300: 'Multiple Choices',
    301: 'Moved Permanently',
    302: `Found (Previously "Moved Temporarily")`,
    303: 'See Other',
    304: 'Not Modified',
    305: 'Use Proxy',
    306: 'Switch Proxy',
    307: 'Temporary Redirect',
    308: 'Permanent Redirect',
    // 4xx Client Error
    400: 'Bad Request',
    401: 'Unauthorized',
    402: 'Payment Required',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    406: 'Not Acceptable',
    407: 'Proxy Authentication Required',
    408: 'Request Timeout',
    409: 'Conflict',
    410: 'Gone',
    411: 'Length Required',
    412: 'Precondition Failed',
    413: 'Payload Too Large',
    414: 'URI Too Long',
    415: 'Unsupported Media Type',
    416: 'Range Not Satisfiable',
    417: 'Expectation Failed',
    418: `I'm a Teapot`,
    421: `Misdirected Request`,
    422: `Unprocessable Entity`,
    423: `Locked`,
    424: `Failed Dependency`,
    425: `Too Early`,
    426: `Upgrade Required`,
    428: `Precondition Required`,
    429: `Too Many Requests`,
    431: `Request Header Fields Too Large`,
    444: 'Connection Closed Without Response',
    451: 'Unavailable For Legal Reasons',
    499: 'Client Closed Request',
    // 5xx Server Error
    500: 'Internal Server Error',
    501: 'Not Implemented',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Timeout',
    505: 'HTTP Version Not Supported',
    506: 'Variant Also Negotiates',
    507: 'Insufficient Storage',
    508: 'Loop Detected',
    510: 'Not Extended',
    511: 'Network Authentication Required',
    599: 'Network Connect Timeout Error',
  },
};
