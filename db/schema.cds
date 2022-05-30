namespace db.model;


type groupType{
    id: Integer;
    name: String;
    year: Integer default 0;
};


type userType {
    id: Integer;
    name: String;
    gender: String;
    groups: array of groupType;
};


