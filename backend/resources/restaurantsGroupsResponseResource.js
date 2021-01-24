export class RestaurantResponseResource {
    constructor(dbRecord) {
        /* MongoDB documents have an auto-generated _id field, convert to id in our API response */
        this.id = dbRecord._id;
        this.name = dbRecord.name;
        /**
         * undefined values will not get serialized in the JSON response
         * for consistency in our API responses, we want to always return all fields, so transform undefineds to nulls
         */
        this.id = requestBody.id;
        /* null values are transformed to undefined so they don't get persisted in the DB (saves space) */
        this.name = requestBody.name === null ? undefined : requestBody.name;
        this.description = requestBody.description === null ? undefined : requestBody.description;
        this.restaurantIds = requestBody.restaurantIds === null ? undefined : requestBody.restaurantIds;

        /* MongoDB documents also have a version key __v, which we ignore */
    }
};
