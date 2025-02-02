/**
 * @swagger
 * tags:
 *   name: ShortenedUrls
 *   description: Shortened URL related operations
 */

/**
 * @swagger
 * /api/:
 *   get:
 *     summary: Get all shortened URLs
 *     tags: [ShortenedUrls]
 *     responses:
 *       200:
 *         description: List of all shortened URLs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   originalUrl:
 *                     type: string
 *                   shortCode:
 *                     type: string
 *                   visits:
 *                     type: integer
 *                   isActive:
 *                     type: boolean
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                   qrCode:
 *                     type: string
 *                 example:
 *                   _id: "679cfabcfe22ec3776e8d8c9"
 *                   originalUrl: "https://www.npmjs.com/package/qrcode"
 *                   shortCode: "WDxV5q5hxz"
 *                   visits: 0
 *                   isActive: true
 *                   createdAt: "2025-01-31T16:30:52.139Z"
 *                   updatedAt: "2025-01-31T16:30:52.139Z"
 *                   qrCode: "/qr/WDxV5q5hxz"
 */

/**
 * @swagger
 * /api/:
 *   post:
 *     summary: Create a new shortened URL
 *     tags: [ShortenedUrls]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               url:
 *                 type: string
 *                 example: "https://www.npmjs.com/package/qrcode"
 *                 description: The original URL to be shortened
 *             required:
 *               - url
 *     responses:
 *       201:
 *         description: Shortened URL created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 originalUrl:
 *                   type: string
 *                   example: "https://www.npmjs.com/package/qrcode"
 *                   description: The original URL that was shortened
 *                 shortCode:
 *                   type: string
 *                   example: "Ce1I5v-Mkw"
 *                   description: The generated short code for the shortened URL
 *                 visits:
 *                   type: integer
 *                   example: 0
 *                   description: The number of visits to the shortened URL
 *                 isActive:
 *                   type: boolean
 *                   example: true
 *                   description: Whether the shortened URL is active or not
 *                 qrCode:
 *                   type: string
 *                   example: "http://localhost:5001/api/qr/Ce1I5v-Mkw"
 *                   description: URL to the QR code image for the shortened URL
 *                 _id:
 *                   type: string
 *                   example: "679ec01792752ce433e28e2c"
 *                   description: The unique identifier for the shortened URL
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-02-02T00:45:11.855Z"
 *                   description: Timestamp when the shortened URL was created
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-02-02T00:45:11.855Z"
 *                   description: Timestamp when the shortened URL was last updated
 *                 __v:
 *                   type: integer
 *                   example: 0
 *                   description: Version key for MongoDB documents
 *             required:
 *               - originalUrl
 *               - shortCode
 *               - visits
 *               - isActive
 *               - qrCode
 *               - _id
 *               - createdAt
 *               - updatedAt
 *               - __v
 *       400:
 *         description: Invalid input, check the URL format
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/{shortCode}:
 *   get:
 *     summary: Get details of a shortened URL by short code
 *     tags: [ShortenedUrls]
 *     parameters:
 *       - name: shortCode
 *         in: path
 *         required: true
 *         description: The short code for the shortened URL
 *         schema:
 *           type: string
 *           example: "eDtIoImLtqf"
 *     responses:
 *       200:
 *         description: Details of the shortened URL
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "679e3774254123e63a8a5bc6"
 *                 originalUrl:
 *                   type: string
 *                   example: "https://www.npmjs.com/package/qrcode"
 *                 shortCode:
 *                   type: string
 *                   example: "eDtIoImLtq"
 *                 visit:
 *                   type: integer
 *                   example: 0
 *                 isActive:
 *                   type: boolean
 *                   example: true
 *                 qrCode:
 *                   type: string
 *                   example: "/qr/eDtIoImLtq"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-02-01T15:02:12.809Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-02-01T16:39:45.604Z"
 *                 __v:
 *                   type: integer
 *                   example: 0
 *                 visits:
 *                   type: integer
 *                   example: 28
 *       404:
 *         description: Shortened URL not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errorCode:
 *                   type: string
 *                   example: "01x000004"
 *                 statusCode:
 *                   type: integer
 *                   example: 404
 *       400:
 *         description: Invalid input
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errorCode:
 *                   type: string
 *                   example: "03x000001"
 *                 statusCode:
 *                   type: integer
 *                   example: 400
 *                 details:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       code:
 *                         type: string
 *                         example: "too_big"
 *                       maximum:
 *                         type: integer
 *                         example: 10
 *                       type:
 *                         type: string
 *                         example: "string"
 *                       inclusive:
 *                         type: boolean
 *                         example: true
 *                       exact:
 *                         type: boolean
 *                         example: false
 *                       message:
 *                         type: string
 *                         example: "String must contain at most 10 character(s)"
 *                       path:
 *                         type: array
 *                         items:
 *                           type: string
 *                           example: "shortCode"
 */

/**
 * @swagger
 * /api/qr/{shortCode}:
 *   get:
 *     summary: Get the QR code image for a shortened URL by short code
 *     tags: [ShortenedUrls]
 *     parameters:
 *       - name: shortCode
 *         in: path
 *         required: true
 *         description: The short code for the shortened URL
 *         schema:
 *           type: string
 *           example: "eDtIoImLtqf"
 *     responses:
 *       200:
 *         description: QR code image for the shortened URL
 *         content:
 *           image/png:
 *             schema:
 *               type: string
 *               format: binary
 *       404:
 *         description: Shortened URL not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errorCode:
 *                   type: string
 *                   example: "01x000004"
 *                 statusCode:
 *                   type: integer
 *                   example: 404
 *       400:
 *         description: Invalid input
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errorCode:
 *                   type: string
 *                   example: "03x000001"
 *                 statusCode:
 *                   type: integer
 *                   example: 400
 *                 details:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       code:
 *                         type: string
 *                         example: "too_big"
 *                       maximum:
 *                         type: integer
 *                         example: 10
 *                       type:
 *                         type: string
 *                         example: "string"
 *                       inclusive:
 *                         type: boolean
 *                         example: true
 *                       exact:
 *                         type: boolean
 *                         example: false
 *                       message:
 *                         type: string
 *                         example: "String must contain at most 10 character(s)"
 *                       path:
 *                         type: array
 *                         items:
 *                           type: string
 *                           example: "shortCode"
 */

/**
 * @swagger
 * /api/visit/{shortCode}:
 *   get:
 *     summary: Track a visit to a shortened URL
 *     tags: [ShortenedUrls]
 *     parameters:
 *       - name: shortCode
 *         in: path
 *         required: true
 *         description: The short code for the shortened URL
 *         schema:
 *           type: string
 *           example: "eDtIoImLtqf"
 *     responses:
 *       200:
 *         description: Details of the shortened URL
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "679e3774254123e63a8a5bc6"
 *                 originalUrl:
 *                   type: string
 *                   example: "https://www.npmjs.com/package/qrcode"
 *                 shortCode:
 *                   type: string
 *                   example: "eDtIoImLtq"
 *                 visit:
 *                   type: integer
 *                   example: 0
 *                 isActive:
 *                   type: boolean
 *                   example: true
 *                 qrCode:
 *                   type: string
 *                   example: "/qr/eDtIoImLtq"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-02-01T15:02:12.809Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-02-01T16:39:45.604Z"
 *                 __v:
 *                   type: integer
 *                   example: 0
 *                 visits:
 *                   type: integer
 *                   example: 28
 *       404:
 *         description: Shortened URL not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errorCode:
 *                   type: string
 *                   example: "01x000004"
 *                 statusCode:
 *                   type: integer
 *                   example: 404
 *       400:
 *         description: Invalid input
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errorCode:
 *                   type: string
 *                   example: "03x000001"
 *                 statusCode:
 *                   type: integer
 *                   example: 400
 *                 details:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       code:
 *                         type: string
 *                         example: "too_big"
 *                       maximum:
 *                         type: integer
 *                         example: 10
 *                       type:
 *                         type: string
 *                         example: "string"
 *                       inclusive:
 *                         type: boolean
 *                         example: true
 *                       exact:
 *                         type: boolean
 *                         example: false
 *                       message:
 *                         type: string
 *                         example: "String must contain at most 10 character(s)"
 *                       path:
 *                         type: array
 *                         items:
 *                           type: string
 *                           example: "shortCode"
 */
