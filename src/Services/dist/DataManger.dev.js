"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserInfos = getUserInfos;
exports.getUserActivity = getUserActivity;
exports.getUserAVerageSessions = getUserAVerageSessions;
exports.getUserPerformance = getUserPerformance;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getUserInfos(idUser) {
  var result, data;
  return regeneratorRuntime.async(function getUserInfos$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("/DataMocked.json"));

        case 2:
          result = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(result.json());

        case 5:
          data = _context.sent;
          return _context.abrupt("return", data.USER_MAIN_DATA.find(function (elt) {
            return elt.id === parseInt(idUser);
          }));

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}

function getUserActivity(idUser) {
  var result, data;
  return regeneratorRuntime.async(function getUserActivity$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetch("/DataMocked.json"));

        case 2:
          result = _context2.sent;
          _context2.next = 5;
          return regeneratorRuntime.awrap(result.json());

        case 5:
          data = _context2.sent;
          return _context2.abrupt("return", data.USER_ACTIVITY.find(function (elt) {
            return elt.userId === parseInt(idUser);
          }));

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function getUserAVerageSessions(idUser) {
  var result, data, dataFinal, formatData;
  return regeneratorRuntime.async(function getUserAVerageSessions$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(fetch("/DataMocked.json"));

        case 2:
          result = _context3.sent;
          _context3.next = 5;
          return regeneratorRuntime.awrap(result.json());

        case 5:
          data = _context3.sent;
          dataFinal = data.USER_AVERAGE_SESSIONS.find(function (elt) {
            return elt.userId === parseInt(idUser);
          });
          formatData = dataFinal.sessions.map(function (elm) {
            switch (elm.day) {
              case 1:
                return _objectSpread({}, elm, {
                  day: "L"
                });

              case 2:
                return _objectSpread({}, elm, {
                  day: "M"
                });

              case 3:
                return _objectSpread({}, elm, {
                  day: "M"
                });

              case 4:
                return _objectSpread({}, elm, {
                  day: "J"
                });

              case 5:
                return _objectSpread({}, elm, {
                  day: "V"
                });

              case 6:
                return _objectSpread({}, elm, {
                  day: "S"
                });

              case 7:
                return _objectSpread({}, elm, {
                  day: "D"
                });

              default:
                return _objectSpread({}, elm);
            }
          });
          return _context3.abrupt("return", formatData);

        case 9:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function getUserPerformance(idUser) {
  var result, data, dataF, dataFormat;
  return regeneratorRuntime.async(function getUserPerformance$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(fetch("/DataMocked.json"));

        case 2:
          result = _context4.sent;
          _context4.next = 5;
          return regeneratorRuntime.awrap(result.json());

        case 5:
          data = _context4.sent;
          dataF = data.USER_PERFORMANCE.find(function (elt) {
            return elt.userId === parseInt(idUser);
          });
          dataFormat = dataF.data.map(function (data) {
            switch (data.kind) {
              case 1:
                return _objectSpread({}, data, {
                  kind: 'Cardio'
                });

              case 2:
                return _objectSpread({}, data, {
                  kind: 'Energie'
                });

              case 3:
                return _objectSpread({}, data, {
                  kind: 'Endurance'
                });

              case 4:
                return _objectSpread({}, data, {
                  kind: 'Force'
                });

              case 5:
                return _objectSpread({}, data, {
                  kind: 'Vitesse'
                });

              case 6:
                return _objectSpread({}, data, {
                  kind: 'Intensité'
                });

              default:
                return _objectSpread({}, data);
            }
          });
          return _context4.abrupt("return", dataFormat);

        case 9:
        case "end":
          return _context4.stop();
      }
    }
  });
}