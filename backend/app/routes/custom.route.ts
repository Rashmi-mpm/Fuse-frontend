import CustomController from '@/controllers/CustomController';
import UserAuthenticator from '@common/middlewares/UserAuthenticator';
import { Router } from 'express';

const path = '/custom';
const CustomRouter = Router({ mergeParams: true });

/**
 * @openapi
 * /custom:
 *   get:
 *     tags: [custom]
 *     summary: Get Custom.
 *     description: Get all custom.
 *     operationId: getAll
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 25
 *         description: Numbers of records from server.
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 2
 *           minimum: 1
 *         description: Page number of pagination request.
 *     responses:
 *       200:
 *         description: Successful operation.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                      $ref: '#/components/schemas/Demo'
 *                 message:
 *                    type: string
 *                    example: Custom(s) retrieved successfully
 *                 success:
 *                    type: boolean
 *                    example: true
 *       500:
 *         description: Server could not handle the request.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/500'
 *       401:
 *         description: Unauthenticated User
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/401'
 *     security: [jwt_api_auth: []]
 */
CustomRouter.get(`${path}`, UserAuthenticator.isAdminAuthenticated(), CustomController.getAll);
/**
 * @openapi
 * /custom/{customId}:
 *   get:
 *     tags: [custom]
 *     summary: Get Custom.
 *     description: Get specific custom.
 *     operationId: getOne
 *     parameters:
 *       - in: path
 *         name: customId
 *         schema:
 *           type: string
 *           example: 577417e645d1b2640cd1f6e6
 *         required: true
 *         description: Id of custom to get.
 *     responses:
 *       200:
 *         description: Successful operation.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  data:
 *                      type: object
 *                      $ref: '#/components/schemas/Custom'
 *                  message:
 *                      type: string
 *                      example: Custom retrieved successfully
 *                  success:
 *                      type: boolean
 *                      example: true
 *       500:
 *         description: Server could not handle the request.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/500'
 *       401:
 *         description: Unauthenticated User
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/401'
 *     security: [jwt_api_auth: []]
 */
CustomRouter.get(`${path}/:customId`, UserAuthenticator.isAdminAuthenticated(), CustomController.getOne);
/**
 * @openapi
 * /custom/{customId}:
 *   patch:
 *     tags: [custom]
 *     summary: Edit Custom.
 *     description: Edit specific custom.
 *     operationId: update
 *     parameters:
 *       - in: path
 *         name: customId
 *         schema:
 *           type: string
 *           example: 577417e645d1b2640cd1f6e6
 *         required: true
 *         description: Id of custom to update
 *     requestBody:
 *       description: Available properties to update
 *       required: true
 *       content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Custom'
 *     responses:
 *       200:
 *         description: Successful operation.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   $ref: '#/components/schemas/Custom'
 *                 message:
 *                     type: string
 *                     example: Demo updated successfully
 *                 success:
 *                     type: boolean
 *                     example: true
 *       500:
 *         description: Server was not able to handle request.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/500'
 *       401:
 *         description: Unauthenticated Employee
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/401'
 *     security: [jwt_api_auth: []]
 */
CustomRouter.patch(`${path}/:customId`, UserAuthenticator.isAdminAuthenticated(), CustomController.update);
/**
 * @openapi
 * /custom/{customId}:
 *   delete:
 *     tags: [custom]
 *     summary: Delete Custom.
 *     description:  Delete specific custom.
 *     operationId: delete
 *     parameters:
 *       - in: path
 *         name: customId
 *         schema:
 *           type: string
 *           example: 577417e645d1b2640cd1f6e6
 *         required: true
 *         description: Id of custom to delete
 *     responses:
 *       200:
 *         description: Successful operation.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  data:
 *                      type: object
 *                      example: null
 *                  message:
 *                      type: string
 *                      example: Custom deleted successfully
 *                  success:
 *                      type: boolean
 *                      example: true
 *       500:
 *         description: Server was not able to handle the request.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/500'
 *       401:
 *         description: Unauthenticated User
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/401'
 *       409:
 *         description: Found active custom
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/400'
 *     security: [jwt_api_auth: []]
 */
CustomRouter.delete('/:customId', UserAuthenticator.isAdminAuthenticated(), CustomController.delete);
/**
 * @openapi
 * /custom:
 *   post:
 *     tags: [custom]
 *     summary: Create Custom.
 *     description: Create custom.
 *     operationId: create
 *     requestBody:
 *       description: create custom
 *       required: true
 *       content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Custom'
 *     responses:
 *       200:
 *         description: Successful operation.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  data:
 *                      type: object
 *                      $ref: '#/components/schemas/Custom'
 *                  message:
 *                      type: string
 *                      example: Demo created successfully
 *                  success:
 *                      type: boolean
 *                      example: true
 *       500:
 *         description: Server was not able to handle request.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/500'
 *       401:
 *         description: Unauthenticated Employee
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/401'
 *     security: [jwt_api_auth: []]
 */
CustomRouter.post(`${path}`, UserAuthenticator.isAdminAuthenticated(), CustomController.create);

export default CustomRouter;
