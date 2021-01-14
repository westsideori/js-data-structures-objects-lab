// Write your solution in this file!
const driver = {};

const updateDriverWithKeyAndValue = (driver, key, value) => {
    const newDriver = Object.assign({}, driver, {[key]:value});
    return newDriver  
};

const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
    driver[key] = value;
    return driver;
};

const deleteFromDriverByKey = (driver, key) => {
    const newUpdatedDriver = Object.assign({}, driver);
    delete newUpdatedDriver[key];
    return newUpdatedDriver;
};

const destructivelyDeleteFromDriverByKey = (driver, key) => {
    delete driver[key];
    return driver;
};