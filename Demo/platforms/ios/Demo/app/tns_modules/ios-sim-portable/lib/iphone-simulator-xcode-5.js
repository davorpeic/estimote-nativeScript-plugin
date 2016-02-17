///<reference path="./.d.ts"/>
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Future = require("fibers/future");
var options = require("./options");
var $ = require("nodobjc");
var iPhoneSimulatorBaseLib = require("./iphone-interop-simulator-base");
var XCode5Simulator = (function (_super) {
    __extends(XCode5Simulator, _super);
    function XCode5Simulator() {
        _super.call(this, this);
    }
    XCode5Simulator.prototype.getDevices = function () {
        return (function () {
            var devices = [];
            _.each(_.keys(XCode5Simulator.allowedDeviceIdentifiers), function (deviceName) {
                devices.push({
                    name: deviceName,
                    id: deviceName,
                    fullId: deviceName,
                    runtimeVersion: ""
                });
            });
            return devices;
        }).future()();
    };
    XCode5Simulator.prototype.getSdks = function () {
        return (function () {
            return [];
        }).future()();
    };
    XCode5Simulator.prototype.setSimulatedDevice = function (config) {
        config("setSimulatedDeviceInfoName", $(this.deviceIdentifier));
    };
    XCode5Simulator.prototype.sendNotification = function (notification) {
        return Future.fromResult();
    };
    XCode5Simulator.prototype.getApplicationPath = function (deviceId, applicationIdentifier) {
        return Future.fromResult("");
    };
    Object.defineProperty(XCode5Simulator.prototype, "deviceIdentifier", {
        get: function () {
            var identifier = options.device || XCode5Simulator.DEFAULT_DEVICE_IDENTIFIER;
            return XCode5Simulator.allowedDeviceIdentifiers[identifier];
        },
        enumerable: true,
        configurable: true
    });
    XCode5Simulator.DEFAULT_DEVICE_IDENTIFIER = "iPhone";
    XCode5Simulator.allowedDeviceIdentifiers = {
        "iPhone": "iPhone",
        "iPhone-Retina-3.5-inch": "iPhone Retina (3.5-inch)",
        "iPhone-Retina-4-inch": "iPhone Retina (4-inch)",
        "iPhone-Retina-4-inch-64-bit": "iPhone Retina (4-inch 64-bit)",
        "iPad": "iPad",
        "iPad-Retina": "iPad Retina",
        "iPad-Retina-64-bit": "iPad Retina (64-bit)"
    };
    return XCode5Simulator;
})(iPhoneSimulatorBaseLib.IPhoneInteropSimulatorBase);
exports.XCode5Simulator = XCode5Simulator;
//# sourceMappingURL=iphone-simulator-xcode-5.js.map