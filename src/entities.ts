export namespace db.model {
  export interface IGroupType {
    id: number;
    name: string;
    year?: number;
  }

  export interface IUserType {
    id: number;
    name: string;
    gender: string;
    groups: IGroupType[];
  }

  export enum Entity {
    GroupType = "db.model.groupType",
    UserType = "db.model.userType",
  }

  export enum SanitizedEntity {
    GroupType = "GroupType",
    UserType = "UserType",
  }
}

export namespace disneySRV {
  export interface IUsers extends db.model.IUserType {}

  export enum Entity {
    Users = "disneySRV.Users",
  }

  export enum SanitizedEntity {
    Users = "Users",
  }
}

export enum Entity {}

export enum SanitizedEntity {}
