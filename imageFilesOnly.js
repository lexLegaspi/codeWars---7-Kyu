// Build a function that will take an array of filenames (as string) and return an array of array. Each array will provide 3 informations about the image file: the full filename, its name and the extension. (See the example below)

// Detect the image files based on the end of the filename which is their format (extension).
// Image files are defined as jpg, gif, png, tiff, svg and bmp. So "puppies.jpg" is a image file while "puppies.html" is not.

// For example:
// Input: ["imgName.extension", "notAnImg"]
// Output: [["imgName.extension", "imgName", "extension"], null]

// So:
// imageFilter(["index.html", "favicon.gif"])
// return [null, ["favicon.gif", "favicon", "gif"]]

// !Non Case Sensitive, so a file with the extension .jpg or .JPG is still an image.

// My Solution:

function imageFilter(arr) {
  const img = ["jpg", "gif", "png", "tiff", "svg", "bmp"];
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const parts = arr[i].split(".");

    if (parts.length < 2) {
      result.push(null);
      continue;
    }

    const ext = parts[parts.length - 1];
    const fileName = parts.slice(0, -1).join(".");

    if (fileName !== "" && img.includes(ext.toLowerCase())) {
      result.push([arr[i], fileName, ext]);
    } else {
      result.push(null);
    }
  }

  return result;
}
