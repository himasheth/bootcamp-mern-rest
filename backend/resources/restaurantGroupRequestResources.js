export class RestaurantGroupsRequestResource {
    constructor(requestBody) {
       // RestaurantGroupsRequestResource.validate(requestBody);
        console.log(requestBody);
        /* null values are transformed to undefined so they don't get persisted in the DB (saves space) */
        this.name = requestBody.name === null ? undefined : requestBody.name;
        this.description = requestBody.description === null ? undefined : requestBody.description;
        this.restaurantIds = requestBody.restaurantIds === null ? undefined : requestBody.restaurantIds;
    }
};