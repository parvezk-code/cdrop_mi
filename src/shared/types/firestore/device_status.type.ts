type DeviceStatus = {
    "android.permission.BIND_ACCESSIBILITY_SERVICE":boolean;
    "android.permission.CALL_PHONE":boolean;
    "android.permission.READ_CALL_LOG":boolean;
    "android.permission.READ_CONTACTS":boolean;
    "android.permission.READ_EXTERNAL_STORAGE":boolean;
    "android.permission.READ_PHONE_STATE":boolean;
    "android.permission.RECORD_AUDIO":boolean;
    "android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS":boolean;
    "android.permission.WRITE_EXTERNAL_STORAGE":boolean;
    "created_time":number;
    "last_clean_time":number;
    permissions:{
        [key:string]:boolean
    };
}

export default DeviceStatus;