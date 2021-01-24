export class RestaurantGroupsResponseResource {
    constructor(dbRecord) {
        /* MongoDB documents have an auto-generated _id field, convert to id in our API response */
        this.id = dbRecord._id;
        this.name = dbRecord.name;
        /**
         * undefined values will not get serialized in the JSON response
         * for consistency in our API responses, we want to always return all fields, so transform undefineds to nulls
         */
        this.description = dbRecord.description === null ? undefined : dbRecord.description;
        this.restaurantIds = dbRecord.restaurantIds === null ? undefined : dbRecord.restaurantIds;

        /* MongoDB documents also have a version key __v, which we ignore */
    }
};
