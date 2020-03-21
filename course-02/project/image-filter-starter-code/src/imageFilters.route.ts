import { Router, Request, Response } from 'express';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

const router: Router = Router();



  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

  /**************************************************************************** */

  //! END @TODO1
router.get('/', async (req: Request, res: Response) => {   

  const image_url:string = req.query.image_url;

  // 1. validate the image_url query
  if(!image_url || image_url.length <= 0) {
    res.status(400).send({ message: 'Missing image_url query string parameter, or wrong parameter value'});
  }

  // 2. call filterImageFromURL(image_url) to filter the image
  let filteredPath:string = null;
  try {
    filteredPath = await filterImageFromURL(image_url);
  } catch (error) {
    res.status(500).send({ message: 'An error occurred', error});
  }
  
  // 3. send the resulting file in the response
  res.status(200).sendFile(filteredPath);

  // 4. deletes any files on the server on finish of the response
  // TODO
});


export const ImageFiltersRouter: Router = router;