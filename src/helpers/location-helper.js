/* eslint-disable prefer-promise-reject-errors */
export const watchPosition = async () => {
  try {
    return await new Promise((resolve, reject) => {
      navigator.geolocation.watchPosition(
        position => resolve({
          lat: position.coords.latitude,
          long: position.coords.longitude
        }),
        error => reject({
          error: true,
          message: error.message
        }), {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      )
    })
  } catch (error) {
    return error
  }
}
