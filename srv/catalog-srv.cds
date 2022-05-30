using { db.model as db } from '../db/schema';

service disneySRV {

    entity Users : db.userType {
        key id: Integer;
    }

}
