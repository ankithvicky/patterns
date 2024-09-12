interface CloudProvider {
    createVM(): void;
    createStorage(): void;
    createDB(): void;
    createK8sClusture(): void;
}



class AWSCloudProvider implements CloudProvider {
    createVM(): void {
        console.log("AWS: Creating EC2 Instance");
    }
    createStorage(): void {
        console.log("AWS: Creating bucket");
    }
    createDB(): void {
        console.log("AWS: Creating Aurora DB");
    }
    createK8sClusture(): void {
        throw new Error("Doesnt support flull fledged k8s support");
    }

}

class GCPCloudProvider implements CloudProvider {
    createVM(): void {
        console.log("GCP: Creating GCE Instance");
    }
    createStorage(): void {
        console.log("GCP: Creating GCS");
    }
    createDB(): void {
        console.log("GCP: Creating Alloy DB");
    }
    createK8sClusture(): void {
        console.log("GCP: Creating GKE DB");
    }
}

/**
 * Here all the cloud provider can depend on fat interface. Even we can have stub implemntation inside the missing function but its good to break the 
 * giant interface into many interface so that class can use needed interface
 */


interface IVM {
    createVM(): void;
    stopVM(): void;
}

interface IBlobStorage {
    createStorage(): void;
    deleteStorage(): void;
}

interface IDB {
    createDB(): void;
    stopDB(): void;
}

interface IK8S {
    createClusture(): void;
    stopClusture(): void;
}


class AWSCloudProviderV2 implements IVM, IBlobStorage, IDB {
    createStorage(): void {
        console.log("AWS: Creating bucket");
    }
    deleteStorage(): void {
        console.log("AWS: Deleting bucket");
    }
    createDB(): void {
        console.log("AWS: Creating Aurora DB");
    }
    stopDB(): void {
        console.log("AWS: Stopping Aurora DB");
    }
    createVM(): void {
        console.log("AWS: Creating EC2 Instance");
    }
    stopVM(): void {
        console.log("AWS: Stopping EC2 Instance");
    }
}

class GCPCloudProviderV2 implements IVM, IBlobStorage, IDB, IK8S {
    createClusture(): void {
        console.log("GCP: Creating GCE Instance");
    }
    stopClusture(): void {
        console.log("GCP: Stopping GCE Instance");
    }
    createStorage(): void {
        console.log("GCP: Creating GCS");
    }
    deleteStorage(): void {
        console.log("GCP: Deleting GCS");
    }
    createDB(): void {
        console.log("GCP: Creating Alloy DB");
    }
    stopDB(): void {
        console.log("GCP: Stopping Alloy DB");
    }
    createVM(): void {
        console.log("AWS: Creating EC2 Instance");
    }
    stopVM(): void {
        console.log("AWS: Stopping EC2 Instance");
    }
}

/*
* Now the concrete implementation only uses the functionality which it can support. 
*/
