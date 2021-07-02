export type Cache = {
  /**
   * A map containing all documents indexed by id.
   *
   * Why: Map instead of document? -> easier cache operations
   */
  documentMap: { [id: string]: Document }
}

export type Document = Record<string, any> & DocumentMeta

export type Object = Record<string, any> & Omit<DocumentMeta, '_id'>

export type DocumentMeta = {
  /**
   * Either coming from API-based CMS or based on the local file path
   * Optional concept as no system/workflow depends on IDs.
   */
  _id: string
  _typeName: string
  _raw?: Record<string, any>
}