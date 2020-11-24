require("colors");

export const tryCatch = async (func, description = "") => {
    try {
        return await func();
    } catch (error) {
        console.error(`ERROR description - ${description}`.underline.red);
        throw error;
    }
};