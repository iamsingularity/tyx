import { Metadata, ProxyMetadata } from "../metadata";
import { Service } from "./service";

export interface Proxy extends Service {
}

export function Proxy(service?: string, application?: string, functionName?: string): ClassDecorator {
    return (target) => {
        Metadata.trace(Proxy, { service, application, functionName }, target);
        ProxyMetadata.define(target).commit(service, application, functionName);
    };
}