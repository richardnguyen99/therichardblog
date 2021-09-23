// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AvifOptions = {
  lossless: Maybe<Scalars["Boolean"]>;
  quality: Maybe<Scalars["Int"]>;
  speed: Maybe<Scalars["Int"]>;
};

export type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat: Maybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  width: Maybe<Scalars["Int"]>;
};

export type BooleanQueryOperatorInput = {
  eq: Maybe<Scalars["Boolean"]>;
  in: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
  ne: Maybe<Scalars["Boolean"]>;
  nin: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
};

export type DateQueryOperatorInput = {
  eq: Maybe<Scalars["Date"]>;
  gt: Maybe<Scalars["Date"]>;
  gte: Maybe<Scalars["Date"]>;
  in: Maybe<Array<Maybe<Scalars["Date"]>>>;
  lt: Maybe<Scalars["Date"]>;
  lte: Maybe<Scalars["Date"]>;
  ne: Maybe<Scalars["Date"]>;
  nin: Maybe<Array<Maybe<Scalars["Date"]>>>;
};

export type Directory = Node & {
  __typename?: "Directory";
  absolutePath: Scalars["String"];
  accessTime: Scalars["Date"];
  atime: Scalars["Date"];
  atimeMs: Scalars["Float"];
  base: Scalars["String"];
  birthTime: Scalars["Date"];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars["Date"]>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars["Float"]>;
  blksize: Maybe<Scalars["Int"]>;
  blocks: Maybe<Scalars["Int"]>;
  changeTime: Scalars["Date"];
  children: Array<Node>;
  ctime: Scalars["Date"];
  ctimeMs: Scalars["Float"];
  dev: Scalars["Int"];
  dir: Scalars["String"];
  ext: Scalars["String"];
  extension: Scalars["String"];
  gid: Scalars["Int"];
  id: Scalars["ID"];
  ino: Scalars["Float"];
  internal: Internal;
  mode: Scalars["Int"];
  modifiedTime: Scalars["Date"];
  mtime: Scalars["Date"];
  mtimeMs: Scalars["Float"];
  name: Scalars["String"];
  nlink: Scalars["Int"];
  parent: Maybe<Node>;
  prettySize: Scalars["String"];
  rdev: Scalars["Int"];
  relativeDirectory: Scalars["String"];
  relativePath: Scalars["String"];
  root: Scalars["String"];
  size: Scalars["Int"];
  sourceInstanceName: Scalars["String"];
  uid: Scalars["Int"];
};

export type DirectoryAccessTimeArgs = {
  difference: Maybe<Scalars["String"]>;
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryAtimeArgs = {
  difference: Maybe<Scalars["String"]>;
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryBirthTimeArgs = {
  difference: Maybe<Scalars["String"]>;
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryChangeTimeArgs = {
  difference: Maybe<Scalars["String"]>;
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryCtimeArgs = {
  difference: Maybe<Scalars["String"]>;
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryModifiedTimeArgs = {
  difference: Maybe<Scalars["String"]>;
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryMtimeArgs = {
  difference: Maybe<Scalars["String"]>;
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryConnection = {
  __typename?: "DirectoryConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<DirectoryEdge>;
  group: Array<DirectoryGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: "DirectoryEdge";
  next: Maybe<Directory>;
  node: Directory;
  previous: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  AbsolutePath = "absolutePath",
  AccessTime = "accessTime",
  Atime = "atime",
  AtimeMs = "atimeMs",
  Base = "base",
  BirthTime = "birthTime",
  Birthtime = "birthtime",
  BirthtimeMs = "birthtimeMs",
  Blksize = "blksize",
  Blocks = "blocks",
  ChangeTime = "changeTime",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Ctime = "ctime",
  CtimeMs = "ctimeMs",
  Dev = "dev",
  Dir = "dir",
  Ext = "ext",
  Extension = "extension",
  Gid = "gid",
  Id = "id",
  Ino = "ino",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Mode = "mode",
  ModifiedTime = "modifiedTime",
  Mtime = "mtime",
  MtimeMs = "mtimeMs",
  Name = "name",
  Nlink = "nlink",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PrettySize = "prettySize",
  Rdev = "rdev",
  RelativeDirectory = "relativeDirectory",
  RelativePath = "relativePath",
  Root = "root",
  Size = "size",
  SourceInstanceName = "sourceInstanceName",
  Uid = "uid",
}

export type DirectoryFilterInput = {
  absolutePath: Maybe<StringQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  mode: Maybe<IntQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  __typename?: "DirectoryGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<DirectoryEdge>;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
  group: Array<DirectoryGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectorySortInput = {
  fields: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars["String"];
  opacity: Maybe<Scalars["Int"]>;
  shadow: Scalars["String"];
};

export type File = Node & {
  __typename?: "File";
  absolutePath: Scalars["String"];
  accessTime: Scalars["Date"];
  atime: Scalars["Date"];
  atimeMs: Scalars["Float"];
  base: Scalars["String"];
  birthTime: Scalars["Date"];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars["Date"]>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars["Float"]>;
  blksize: Maybe<Scalars["Int"]>;
  blocks: Maybe<Scalars["Int"]>;
  changeTime: Scalars["Date"];
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp: Maybe<ImageSharp>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx: Maybe<Mdx>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx: Maybe<Array<Maybe<Mdx>>>;
  ctime: Scalars["Date"];
  ctimeMs: Scalars["Float"];
  dev: Scalars["Int"];
  dir: Scalars["String"];
  ext: Scalars["String"];
  extension: Scalars["String"];
  gid: Scalars["Int"];
  id: Scalars["ID"];
  ino: Scalars["Float"];
  internal: Internal;
  mode: Scalars["Int"];
  modifiedTime: Scalars["Date"];
  mtime: Scalars["Date"];
  mtimeMs: Scalars["Float"];
  name: Scalars["String"];
  nlink: Scalars["Int"];
  parent: Maybe<Node>;
  prettySize: Scalars["String"];
  /** Copy file to static directory and return public url to it */
  publicURL: Maybe<Scalars["String"]>;
  rdev: Scalars["Int"];
  relativeDirectory: Scalars["String"];
  relativePath: Scalars["String"];
  root: Scalars["String"];
  size: Scalars["Int"];
  sourceInstanceName: Scalars["String"];
  uid: Scalars["Int"];
};

export type FileAccessTimeArgs = {
  difference: Maybe<Scalars["String"]>;
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileAtimeArgs = {
  difference: Maybe<Scalars["String"]>;
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileBirthTimeArgs = {
  difference: Maybe<Scalars["String"]>;
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileChangeTimeArgs = {
  difference: Maybe<Scalars["String"]>;
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileCtimeArgs = {
  difference: Maybe<Scalars["String"]>;
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileModifiedTimeArgs = {
  difference: Maybe<Scalars["String"]>;
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileMtimeArgs = {
  difference: Maybe<Scalars["String"]>;
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileConnection = {
  __typename?: "FileConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<FileEdge>;
  group: Array<FileGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: "FileEdge";
  next: Maybe<File>;
  node: File;
  previous: Maybe<File>;
};

export enum FileFieldsEnum {
  AbsolutePath = "absolutePath",
  AccessTime = "accessTime",
  Atime = "atime",
  AtimeMs = "atimeMs",
  Base = "base",
  BirthTime = "birthTime",
  Birthtime = "birthtime",
  BirthtimeMs = "birthtimeMs",
  Blksize = "blksize",
  Blocks = "blocks",
  ChangeTime = "changeTime",
  ChildImageSharpChildren = "childImageSharp___children",
  ChildImageSharpChildrenChildren = "childImageSharp___children___children",
  ChildImageSharpChildrenChildrenChildren = "childImageSharp___children___children___children",
  ChildImageSharpChildrenChildrenId = "childImageSharp___children___children___id",
  ChildImageSharpChildrenId = "childImageSharp___children___id",
  ChildImageSharpChildrenInternalContent = "childImageSharp___children___internal___content",
  ChildImageSharpChildrenInternalContentDigest = "childImageSharp___children___internal___contentDigest",
  ChildImageSharpChildrenInternalDescription = "childImageSharp___children___internal___description",
  ChildImageSharpChildrenInternalFieldOwners = "childImageSharp___children___internal___fieldOwners",
  ChildImageSharpChildrenInternalIgnoreType = "childImageSharp___children___internal___ignoreType",
  ChildImageSharpChildrenInternalMediaType = "childImageSharp___children___internal___mediaType",
  ChildImageSharpChildrenInternalOwner = "childImageSharp___children___internal___owner",
  ChildImageSharpChildrenInternalType = "childImageSharp___children___internal___type",
  ChildImageSharpChildrenParentChildren = "childImageSharp___children___parent___children",
  ChildImageSharpChildrenParentId = "childImageSharp___children___parent___id",
  ChildImageSharpFixedAspectRatio = "childImageSharp___fixed___aspectRatio",
  ChildImageSharpFixedBase64 = "childImageSharp___fixed___base64",
  ChildImageSharpFixedHeight = "childImageSharp___fixed___height",
  ChildImageSharpFixedOriginalName = "childImageSharp___fixed___originalName",
  ChildImageSharpFixedSrc = "childImageSharp___fixed___src",
  ChildImageSharpFixedSrcSet = "childImageSharp___fixed___srcSet",
  ChildImageSharpFixedSrcSetWebp = "childImageSharp___fixed___srcSetWebp",
  ChildImageSharpFixedSrcWebp = "childImageSharp___fixed___srcWebp",
  ChildImageSharpFixedTracedSvg = "childImageSharp___fixed___tracedSVG",
  ChildImageSharpFixedWidth = "childImageSharp___fixed___width",
  ChildImageSharpFluidAspectRatio = "childImageSharp___fluid___aspectRatio",
  ChildImageSharpFluidBase64 = "childImageSharp___fluid___base64",
  ChildImageSharpFluidOriginalImg = "childImageSharp___fluid___originalImg",
  ChildImageSharpFluidOriginalName = "childImageSharp___fluid___originalName",
  ChildImageSharpFluidPresentationHeight = "childImageSharp___fluid___presentationHeight",
  ChildImageSharpFluidPresentationWidth = "childImageSharp___fluid___presentationWidth",
  ChildImageSharpFluidSizes = "childImageSharp___fluid___sizes",
  ChildImageSharpFluidSrc = "childImageSharp___fluid___src",
  ChildImageSharpFluidSrcSet = "childImageSharp___fluid___srcSet",
  ChildImageSharpFluidSrcSetWebp = "childImageSharp___fluid___srcSetWebp",
  ChildImageSharpFluidSrcWebp = "childImageSharp___fluid___srcWebp",
  ChildImageSharpFluidTracedSvg = "childImageSharp___fluid___tracedSVG",
  ChildImageSharpGatsbyImageData = "childImageSharp___gatsbyImageData",
  ChildImageSharpId = "childImageSharp___id",
  ChildImageSharpInternalContent = "childImageSharp___internal___content",
  ChildImageSharpInternalContentDigest = "childImageSharp___internal___contentDigest",
  ChildImageSharpInternalDescription = "childImageSharp___internal___description",
  ChildImageSharpInternalFieldOwners = "childImageSharp___internal___fieldOwners",
  ChildImageSharpInternalIgnoreType = "childImageSharp___internal___ignoreType",
  ChildImageSharpInternalMediaType = "childImageSharp___internal___mediaType",
  ChildImageSharpInternalOwner = "childImageSharp___internal___owner",
  ChildImageSharpInternalType = "childImageSharp___internal___type",
  ChildImageSharpOriginalHeight = "childImageSharp___original___height",
  ChildImageSharpOriginalSrc = "childImageSharp___original___src",
  ChildImageSharpOriginalWidth = "childImageSharp___original___width",
  ChildImageSharpParentChildren = "childImageSharp___parent___children",
  ChildImageSharpParentChildrenChildren = "childImageSharp___parent___children___children",
  ChildImageSharpParentChildrenId = "childImageSharp___parent___children___id",
  ChildImageSharpParentId = "childImageSharp___parent___id",
  ChildImageSharpParentInternalContent = "childImageSharp___parent___internal___content",
  ChildImageSharpParentInternalContentDigest = "childImageSharp___parent___internal___contentDigest",
  ChildImageSharpParentInternalDescription = "childImageSharp___parent___internal___description",
  ChildImageSharpParentInternalFieldOwners = "childImageSharp___parent___internal___fieldOwners",
  ChildImageSharpParentInternalIgnoreType = "childImageSharp___parent___internal___ignoreType",
  ChildImageSharpParentInternalMediaType = "childImageSharp___parent___internal___mediaType",
  ChildImageSharpParentInternalOwner = "childImageSharp___parent___internal___owner",
  ChildImageSharpParentInternalType = "childImageSharp___parent___internal___type",
  ChildImageSharpParentParentChildren = "childImageSharp___parent___parent___children",
  ChildImageSharpParentParentId = "childImageSharp___parent___parent___id",
  ChildImageSharpResizeAspectRatio = "childImageSharp___resize___aspectRatio",
  ChildImageSharpResizeHeight = "childImageSharp___resize___height",
  ChildImageSharpResizeOriginalName = "childImageSharp___resize___originalName",
  ChildImageSharpResizeSrc = "childImageSharp___resize___src",
  ChildImageSharpResizeTracedSvg = "childImageSharp___resize___tracedSVG",
  ChildImageSharpResizeWidth = "childImageSharp___resize___width",
  ChildMdxBody = "childMdx___body",
  ChildMdxChildren = "childMdx___children",
  ChildMdxChildrenChildren = "childMdx___children___children",
  ChildMdxChildrenChildrenChildren = "childMdx___children___children___children",
  ChildMdxChildrenChildrenId = "childMdx___children___children___id",
  ChildMdxChildrenId = "childMdx___children___id",
  ChildMdxChildrenInternalContent = "childMdx___children___internal___content",
  ChildMdxChildrenInternalContentDigest = "childMdx___children___internal___contentDigest",
  ChildMdxChildrenInternalDescription = "childMdx___children___internal___description",
  ChildMdxChildrenInternalFieldOwners = "childMdx___children___internal___fieldOwners",
  ChildMdxChildrenInternalIgnoreType = "childMdx___children___internal___ignoreType",
  ChildMdxChildrenInternalMediaType = "childMdx___children___internal___mediaType",
  ChildMdxChildrenInternalOwner = "childMdx___children___internal___owner",
  ChildMdxChildrenInternalType = "childMdx___children___internal___type",
  ChildMdxChildrenParentChildren = "childMdx___children___parent___children",
  ChildMdxChildrenParentId = "childMdx___children___parent___id",
  ChildMdxExcerpt = "childMdx___excerpt",
  ChildMdxFieldsSlug = "childMdx___fields___slug",
  ChildMdxFileAbsolutePath = "childMdx___fileAbsolutePath",
  ChildMdxFrontmatterCategories = "childMdx___frontmatter___categories",
  ChildMdxFrontmatterCreated = "childMdx___frontmatter___created",
  ChildMdxFrontmatterDescription = "childMdx___frontmatter___description",
  ChildMdxFrontmatterStack = "childMdx___frontmatter___stack",
  ChildMdxFrontmatterTitle = "childMdx___frontmatter___title",
  ChildMdxHeadings = "childMdx___headings",
  ChildMdxHeadingsDepth = "childMdx___headings___depth",
  ChildMdxHeadingsValue = "childMdx___headings___value",
  ChildMdxHtml = "childMdx___html",
  ChildMdxId = "childMdx___id",
  ChildMdxInternalContent = "childMdx___internal___content",
  ChildMdxInternalContentDigest = "childMdx___internal___contentDigest",
  ChildMdxInternalDescription = "childMdx___internal___description",
  ChildMdxInternalFieldOwners = "childMdx___internal___fieldOwners",
  ChildMdxInternalIgnoreType = "childMdx___internal___ignoreType",
  ChildMdxInternalMediaType = "childMdx___internal___mediaType",
  ChildMdxInternalOwner = "childMdx___internal___owner",
  ChildMdxInternalType = "childMdx___internal___type",
  ChildMdxMdxAst = "childMdx___mdxAST",
  ChildMdxParentChildren = "childMdx___parent___children",
  ChildMdxParentChildrenChildren = "childMdx___parent___children___children",
  ChildMdxParentChildrenId = "childMdx___parent___children___id",
  ChildMdxParentId = "childMdx___parent___id",
  ChildMdxParentInternalContent = "childMdx___parent___internal___content",
  ChildMdxParentInternalContentDigest = "childMdx___parent___internal___contentDigest",
  ChildMdxParentInternalDescription = "childMdx___parent___internal___description",
  ChildMdxParentInternalFieldOwners = "childMdx___parent___internal___fieldOwners",
  ChildMdxParentInternalIgnoreType = "childMdx___parent___internal___ignoreType",
  ChildMdxParentInternalMediaType = "childMdx___parent___internal___mediaType",
  ChildMdxParentInternalOwner = "childMdx___parent___internal___owner",
  ChildMdxParentInternalType = "childMdx___parent___internal___type",
  ChildMdxParentParentChildren = "childMdx___parent___parent___children",
  ChildMdxParentParentId = "childMdx___parent___parent___id",
  ChildMdxRawBody = "childMdx___rawBody",
  ChildMdxSlug = "childMdx___slug",
  ChildMdxTableOfContents = "childMdx___tableOfContents",
  ChildMdxTimeToRead = "childMdx___timeToRead",
  ChildMdxWordCountParagraphs = "childMdx___wordCount___paragraphs",
  ChildMdxWordCountSentences = "childMdx___wordCount___sentences",
  ChildMdxWordCountWords = "childMdx___wordCount___words",
  Children = "children",
  ChildrenImageSharp = "childrenImageSharp",
  ChildrenImageSharpChildren = "childrenImageSharp___children",
  ChildrenImageSharpChildrenChildren = "childrenImageSharp___children___children",
  ChildrenImageSharpChildrenChildrenChildren = "childrenImageSharp___children___children___children",
  ChildrenImageSharpChildrenChildrenId = "childrenImageSharp___children___children___id",
  ChildrenImageSharpChildrenId = "childrenImageSharp___children___id",
  ChildrenImageSharpChildrenInternalContent = "childrenImageSharp___children___internal___content",
  ChildrenImageSharpChildrenInternalContentDigest = "childrenImageSharp___children___internal___contentDigest",
  ChildrenImageSharpChildrenInternalDescription = "childrenImageSharp___children___internal___description",
  ChildrenImageSharpChildrenInternalFieldOwners = "childrenImageSharp___children___internal___fieldOwners",
  ChildrenImageSharpChildrenInternalIgnoreType = "childrenImageSharp___children___internal___ignoreType",
  ChildrenImageSharpChildrenInternalMediaType = "childrenImageSharp___children___internal___mediaType",
  ChildrenImageSharpChildrenInternalOwner = "childrenImageSharp___children___internal___owner",
  ChildrenImageSharpChildrenInternalType = "childrenImageSharp___children___internal___type",
  ChildrenImageSharpChildrenParentChildren = "childrenImageSharp___children___parent___children",
  ChildrenImageSharpChildrenParentId = "childrenImageSharp___children___parent___id",
  ChildrenImageSharpFixedAspectRatio = "childrenImageSharp___fixed___aspectRatio",
  ChildrenImageSharpFixedBase64 = "childrenImageSharp___fixed___base64",
  ChildrenImageSharpFixedHeight = "childrenImageSharp___fixed___height",
  ChildrenImageSharpFixedOriginalName = "childrenImageSharp___fixed___originalName",
  ChildrenImageSharpFixedSrc = "childrenImageSharp___fixed___src",
  ChildrenImageSharpFixedSrcSet = "childrenImageSharp___fixed___srcSet",
  ChildrenImageSharpFixedSrcSetWebp = "childrenImageSharp___fixed___srcSetWebp",
  ChildrenImageSharpFixedSrcWebp = "childrenImageSharp___fixed___srcWebp",
  ChildrenImageSharpFixedTracedSvg = "childrenImageSharp___fixed___tracedSVG",
  ChildrenImageSharpFixedWidth = "childrenImageSharp___fixed___width",
  ChildrenImageSharpFluidAspectRatio = "childrenImageSharp___fluid___aspectRatio",
  ChildrenImageSharpFluidBase64 = "childrenImageSharp___fluid___base64",
  ChildrenImageSharpFluidOriginalImg = "childrenImageSharp___fluid___originalImg",
  ChildrenImageSharpFluidOriginalName = "childrenImageSharp___fluid___originalName",
  ChildrenImageSharpFluidPresentationHeight = "childrenImageSharp___fluid___presentationHeight",
  ChildrenImageSharpFluidPresentationWidth = "childrenImageSharp___fluid___presentationWidth",
  ChildrenImageSharpFluidSizes = "childrenImageSharp___fluid___sizes",
  ChildrenImageSharpFluidSrc = "childrenImageSharp___fluid___src",
  ChildrenImageSharpFluidSrcSet = "childrenImageSharp___fluid___srcSet",
  ChildrenImageSharpFluidSrcSetWebp = "childrenImageSharp___fluid___srcSetWebp",
  ChildrenImageSharpFluidSrcWebp = "childrenImageSharp___fluid___srcWebp",
  ChildrenImageSharpFluidTracedSvg = "childrenImageSharp___fluid___tracedSVG",
  ChildrenImageSharpGatsbyImageData = "childrenImageSharp___gatsbyImageData",
  ChildrenImageSharpId = "childrenImageSharp___id",
  ChildrenImageSharpInternalContent = "childrenImageSharp___internal___content",
  ChildrenImageSharpInternalContentDigest = "childrenImageSharp___internal___contentDigest",
  ChildrenImageSharpInternalDescription = "childrenImageSharp___internal___description",
  ChildrenImageSharpInternalFieldOwners = "childrenImageSharp___internal___fieldOwners",
  ChildrenImageSharpInternalIgnoreType = "childrenImageSharp___internal___ignoreType",
  ChildrenImageSharpInternalMediaType = "childrenImageSharp___internal___mediaType",
  ChildrenImageSharpInternalOwner = "childrenImageSharp___internal___owner",
  ChildrenImageSharpInternalType = "childrenImageSharp___internal___type",
  ChildrenImageSharpOriginalHeight = "childrenImageSharp___original___height",
  ChildrenImageSharpOriginalSrc = "childrenImageSharp___original___src",
  ChildrenImageSharpOriginalWidth = "childrenImageSharp___original___width",
  ChildrenImageSharpParentChildren = "childrenImageSharp___parent___children",
  ChildrenImageSharpParentChildrenChildren = "childrenImageSharp___parent___children___children",
  ChildrenImageSharpParentChildrenId = "childrenImageSharp___parent___children___id",
  ChildrenImageSharpParentId = "childrenImageSharp___parent___id",
  ChildrenImageSharpParentInternalContent = "childrenImageSharp___parent___internal___content",
  ChildrenImageSharpParentInternalContentDigest = "childrenImageSharp___parent___internal___contentDigest",
  ChildrenImageSharpParentInternalDescription = "childrenImageSharp___parent___internal___description",
  ChildrenImageSharpParentInternalFieldOwners = "childrenImageSharp___parent___internal___fieldOwners",
  ChildrenImageSharpParentInternalIgnoreType = "childrenImageSharp___parent___internal___ignoreType",
  ChildrenImageSharpParentInternalMediaType = "childrenImageSharp___parent___internal___mediaType",
  ChildrenImageSharpParentInternalOwner = "childrenImageSharp___parent___internal___owner",
  ChildrenImageSharpParentInternalType = "childrenImageSharp___parent___internal___type",
  ChildrenImageSharpParentParentChildren = "childrenImageSharp___parent___parent___children",
  ChildrenImageSharpParentParentId = "childrenImageSharp___parent___parent___id",
  ChildrenImageSharpResizeAspectRatio = "childrenImageSharp___resize___aspectRatio",
  ChildrenImageSharpResizeHeight = "childrenImageSharp___resize___height",
  ChildrenImageSharpResizeOriginalName = "childrenImageSharp___resize___originalName",
  ChildrenImageSharpResizeSrc = "childrenImageSharp___resize___src",
  ChildrenImageSharpResizeTracedSvg = "childrenImageSharp___resize___tracedSVG",
  ChildrenImageSharpResizeWidth = "childrenImageSharp___resize___width",
  ChildrenMdx = "childrenMdx",
  ChildrenMdxBody = "childrenMdx___body",
  ChildrenMdxChildren = "childrenMdx___children",
  ChildrenMdxChildrenChildren = "childrenMdx___children___children",
  ChildrenMdxChildrenChildrenChildren = "childrenMdx___children___children___children",
  ChildrenMdxChildrenChildrenId = "childrenMdx___children___children___id",
  ChildrenMdxChildrenId = "childrenMdx___children___id",
  ChildrenMdxChildrenInternalContent = "childrenMdx___children___internal___content",
  ChildrenMdxChildrenInternalContentDigest = "childrenMdx___children___internal___contentDigest",
  ChildrenMdxChildrenInternalDescription = "childrenMdx___children___internal___description",
  ChildrenMdxChildrenInternalFieldOwners = "childrenMdx___children___internal___fieldOwners",
  ChildrenMdxChildrenInternalIgnoreType = "childrenMdx___children___internal___ignoreType",
  ChildrenMdxChildrenInternalMediaType = "childrenMdx___children___internal___mediaType",
  ChildrenMdxChildrenInternalOwner = "childrenMdx___children___internal___owner",
  ChildrenMdxChildrenInternalType = "childrenMdx___children___internal___type",
  ChildrenMdxChildrenParentChildren = "childrenMdx___children___parent___children",
  ChildrenMdxChildrenParentId = "childrenMdx___children___parent___id",
  ChildrenMdxExcerpt = "childrenMdx___excerpt",
  ChildrenMdxFieldsSlug = "childrenMdx___fields___slug",
  ChildrenMdxFileAbsolutePath = "childrenMdx___fileAbsolutePath",
  ChildrenMdxFrontmatterCategories = "childrenMdx___frontmatter___categories",
  ChildrenMdxFrontmatterCreated = "childrenMdx___frontmatter___created",
  ChildrenMdxFrontmatterDescription = "childrenMdx___frontmatter___description",
  ChildrenMdxFrontmatterStack = "childrenMdx___frontmatter___stack",
  ChildrenMdxFrontmatterTitle = "childrenMdx___frontmatter___title",
  ChildrenMdxHeadings = "childrenMdx___headings",
  ChildrenMdxHeadingsDepth = "childrenMdx___headings___depth",
  ChildrenMdxHeadingsValue = "childrenMdx___headings___value",
  ChildrenMdxHtml = "childrenMdx___html",
  ChildrenMdxId = "childrenMdx___id",
  ChildrenMdxInternalContent = "childrenMdx___internal___content",
  ChildrenMdxInternalContentDigest = "childrenMdx___internal___contentDigest",
  ChildrenMdxInternalDescription = "childrenMdx___internal___description",
  ChildrenMdxInternalFieldOwners = "childrenMdx___internal___fieldOwners",
  ChildrenMdxInternalIgnoreType = "childrenMdx___internal___ignoreType",
  ChildrenMdxInternalMediaType = "childrenMdx___internal___mediaType",
  ChildrenMdxInternalOwner = "childrenMdx___internal___owner",
  ChildrenMdxInternalType = "childrenMdx___internal___type",
  ChildrenMdxMdxAst = "childrenMdx___mdxAST",
  ChildrenMdxParentChildren = "childrenMdx___parent___children",
  ChildrenMdxParentChildrenChildren = "childrenMdx___parent___children___children",
  ChildrenMdxParentChildrenId = "childrenMdx___parent___children___id",
  ChildrenMdxParentId = "childrenMdx___parent___id",
  ChildrenMdxParentInternalContent = "childrenMdx___parent___internal___content",
  ChildrenMdxParentInternalContentDigest = "childrenMdx___parent___internal___contentDigest",
  ChildrenMdxParentInternalDescription = "childrenMdx___parent___internal___description",
  ChildrenMdxParentInternalFieldOwners = "childrenMdx___parent___internal___fieldOwners",
  ChildrenMdxParentInternalIgnoreType = "childrenMdx___parent___internal___ignoreType",
  ChildrenMdxParentInternalMediaType = "childrenMdx___parent___internal___mediaType",
  ChildrenMdxParentInternalOwner = "childrenMdx___parent___internal___owner",
  ChildrenMdxParentInternalType = "childrenMdx___parent___internal___type",
  ChildrenMdxParentParentChildren = "childrenMdx___parent___parent___children",
  ChildrenMdxParentParentId = "childrenMdx___parent___parent___id",
  ChildrenMdxRawBody = "childrenMdx___rawBody",
  ChildrenMdxSlug = "childrenMdx___slug",
  ChildrenMdxTableOfContents = "childrenMdx___tableOfContents",
  ChildrenMdxTimeToRead = "childrenMdx___timeToRead",
  ChildrenMdxWordCountParagraphs = "childrenMdx___wordCount___paragraphs",
  ChildrenMdxWordCountSentences = "childrenMdx___wordCount___sentences",
  ChildrenMdxWordCountWords = "childrenMdx___wordCount___words",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Ctime = "ctime",
  CtimeMs = "ctimeMs",
  Dev = "dev",
  Dir = "dir",
  Ext = "ext",
  Extension = "extension",
  Gid = "gid",
  Id = "id",
  Ino = "ino",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Mode = "mode",
  ModifiedTime = "modifiedTime",
  Mtime = "mtime",
  MtimeMs = "mtimeMs",
  Name = "name",
  Nlink = "nlink",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PrettySize = "prettySize",
  PublicUrl = "publicURL",
  Rdev = "rdev",
  RelativeDirectory = "relativeDirectory",
  RelativePath = "relativePath",
  Root = "root",
  Size = "size",
  SourceInstanceName = "sourceInstanceName",
  Uid = "uid",
}

export type FileFilterInput = {
  absolutePath: Maybe<StringQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  childMdx: Maybe<MdxFilterInput>;
  children: Maybe<NodeFilterListInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  childrenMdx: Maybe<MdxFilterListInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  mode: Maybe<IntQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
};

export type FileGroupConnection = {
  __typename?: "FileGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<FileEdge>;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
  group: Array<FileGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileSortInput = {
  fields: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq: Maybe<Scalars["Float"]>;
  gt: Maybe<Scalars["Float"]>;
  gte: Maybe<Scalars["Float"]>;
  in: Maybe<Array<Maybe<Scalars["Float"]>>>;
  lt: Maybe<Scalars["Float"]>;
  lte: Maybe<Scalars["Float"]>;
  ne: Maybe<Scalars["Float"]>;
  nin: Maybe<Array<Maybe<Scalars["Float"]>>>;
};

export enum HeadingsMdx {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
}

export enum ImageCropFocus {
  Attention = "ATTENTION",
  Center = "CENTER",
  East = "EAST",
  Entropy = "ENTROPY",
  North = "NORTH",
  Northeast = "NORTHEAST",
  Northwest = "NORTHWEST",
  South = "SOUTH",
  Southeast = "SOUTHEAST",
  Southwest = "SOUTHWEST",
  West = "WEST",
}

export enum ImageFit {
  Contain = "CONTAIN",
  Cover = "COVER",
  Fill = "FILL",
  Inside = "INSIDE",
  Outside = "OUTSIDE",
}

export enum ImageFormat {
  Auto = "AUTO",
  Avif = "AVIF",
  Jpg = "JPG",
  NoChange = "NO_CHANGE",
  Png = "PNG",
  Webp = "WEBP",
}

export enum ImageLayout {
  Constrained = "CONSTRAINED",
  Fixed = "FIXED",
  FullWidth = "FULL_WIDTH",
}

export enum ImagePlaceholder {
  Blurred = "BLURRED",
  DominantColor = "DOMINANT_COLOR",
  None = "NONE",
  TracedSvg = "TRACED_SVG",
}

export type ImageSharp = Node & {
  __typename?: "ImageSharp";
  children: Array<Node>;
  fixed: Maybe<ImageSharpFixed>;
  fluid: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars["JSON"];
  id: Scalars["ID"];
  internal: Internal;
  original: Maybe<ImageSharpOriginal>;
  parent: Maybe<Node>;
  resize: Maybe<ImageSharpResize>;
};

export type ImageSharpFixedArgs = {
  background?: Maybe<Scalars["String"]>;
  base64Width: Maybe<Scalars["Int"]>;
  cropFocus?: Maybe<ImageCropFocus>;
  duotone: Maybe<DuotoneGradient>;
  fit?: Maybe<ImageFit>;
  grayscale?: Maybe<Scalars["Boolean"]>;
  height: Maybe<Scalars["Int"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  jpegQuality: Maybe<Scalars["Int"]>;
  pngCompressionSpeed?: Maybe<Scalars["Int"]>;
  pngQuality: Maybe<Scalars["Int"]>;
  quality: Maybe<Scalars["Int"]>;
  rotate?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  traceSVG: Maybe<Potrace>;
  trim?: Maybe<Scalars["Float"]>;
  webpQuality: Maybe<Scalars["Int"]>;
  width: Maybe<Scalars["Int"]>;
};

export type ImageSharpFluidArgs = {
  background?: Maybe<Scalars["String"]>;
  base64Width: Maybe<Scalars["Int"]>;
  cropFocus?: Maybe<ImageCropFocus>;
  duotone: Maybe<DuotoneGradient>;
  fit?: Maybe<ImageFit>;
  grayscale?: Maybe<Scalars["Boolean"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  jpegQuality: Maybe<Scalars["Int"]>;
  maxHeight: Maybe<Scalars["Int"]>;
  maxWidth: Maybe<Scalars["Int"]>;
  pngCompressionSpeed?: Maybe<Scalars["Int"]>;
  pngQuality: Maybe<Scalars["Int"]>;
  quality: Maybe<Scalars["Int"]>;
  rotate?: Maybe<Scalars["Int"]>;
  sizes?: Maybe<Scalars["String"]>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  traceSVG: Maybe<Potrace>;
  trim?: Maybe<Scalars["Float"]>;
  webpQuality: Maybe<Scalars["Int"]>;
};

export type ImageSharpGatsbyImageDataArgs = {
  aspectRatio: Maybe<Scalars["Float"]>;
  avifOptions: Maybe<AvifOptions>;
  backgroundColor: Maybe<Scalars["String"]>;
  blurredOptions: Maybe<BlurredOptions>;
  breakpoints: Maybe<Array<Maybe<Scalars["Int"]>>>;
  formats: Maybe<Array<Maybe<ImageFormat>>>;
  height: Maybe<Scalars["Int"]>;
  jpgOptions: Maybe<JpgOptions>;
  layout?: Maybe<ImageLayout>;
  outputPixelDensities: Maybe<Array<Maybe<Scalars["Float"]>>>;
  placeholder: Maybe<ImagePlaceholder>;
  pngOptions: Maybe<PngOptions>;
  quality: Maybe<Scalars["Int"]>;
  sizes: Maybe<Scalars["String"]>;
  tracedSVGOptions: Maybe<Potrace>;
  transformOptions: Maybe<TransformOptions>;
  webpOptions: Maybe<WebPOptions>;
  width: Maybe<Scalars["Int"]>;
};

export type ImageSharpResizeArgs = {
  background?: Maybe<Scalars["String"]>;
  base64?: Maybe<Scalars["Boolean"]>;
  cropFocus?: Maybe<ImageCropFocus>;
  duotone: Maybe<DuotoneGradient>;
  fit?: Maybe<ImageFit>;
  grayscale?: Maybe<Scalars["Boolean"]>;
  height: Maybe<Scalars["Int"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  jpegQuality: Maybe<Scalars["Int"]>;
  pngCompressionLevel?: Maybe<Scalars["Int"]>;
  pngCompressionSpeed?: Maybe<Scalars["Int"]>;
  pngQuality: Maybe<Scalars["Int"]>;
  quality: Maybe<Scalars["Int"]>;
  rotate?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ImageFormat>;
  traceSVG: Maybe<Potrace>;
  trim?: Maybe<Scalars["Float"]>;
  webpQuality: Maybe<Scalars["Int"]>;
  width: Maybe<Scalars["Int"]>;
};

export type ImageSharpConnection = {
  __typename?: "ImageSharpConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ImageSharpEdge>;
  group: Array<ImageSharpGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: "ImageSharpEdge";
  next: Maybe<ImageSharp>;
  node: ImageSharp;
  previous: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  FixedAspectRatio = "fixed___aspectRatio",
  FixedBase64 = "fixed___base64",
  FixedHeight = "fixed___height",
  FixedOriginalName = "fixed___originalName",
  FixedSrc = "fixed___src",
  FixedSrcSet = "fixed___srcSet",
  FixedSrcSetWebp = "fixed___srcSetWebp",
  FixedSrcWebp = "fixed___srcWebp",
  FixedTracedSvg = "fixed___tracedSVG",
  FixedWidth = "fixed___width",
  FluidAspectRatio = "fluid___aspectRatio",
  FluidBase64 = "fluid___base64",
  FluidOriginalImg = "fluid___originalImg",
  FluidOriginalName = "fluid___originalName",
  FluidPresentationHeight = "fluid___presentationHeight",
  FluidPresentationWidth = "fluid___presentationWidth",
  FluidSizes = "fluid___sizes",
  FluidSrc = "fluid___src",
  FluidSrcSet = "fluid___srcSet",
  FluidSrcSetWebp = "fluid___srcSetWebp",
  FluidSrcWebp = "fluid___srcWebp",
  FluidTracedSvg = "fluid___tracedSVG",
  GatsbyImageData = "gatsbyImageData",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  OriginalHeight = "original___height",
  OriginalSrc = "original___src",
  OriginalWidth = "original___width",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  ResizeAspectRatio = "resize___aspectRatio",
  ResizeHeight = "resize___height",
  ResizeOriginalName = "resize___originalName",
  ResizeSrc = "resize___src",
  ResizeTracedSvg = "resize___tracedSVG",
  ResizeWidth = "resize___width",
}

export type ImageSharpFilterInput = {
  children: Maybe<NodeFilterListInput>;
  fixed: Maybe<ImageSharpFixedFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: Maybe<JsonQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  parent: Maybe<NodeFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: "ImageSharpFixed";
  aspectRatio: Maybe<Scalars["Float"]>;
  base64: Maybe<Scalars["String"]>;
  height: Scalars["Float"];
  originalName: Maybe<Scalars["String"]>;
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcSetWebp: Maybe<Scalars["String"]>;
  srcWebp: Maybe<Scalars["String"]>;
  tracedSVG: Maybe<Scalars["String"]>;
  width: Scalars["Float"];
};

export type ImageSharpFixedFilterInput = {
  aspectRatio: Maybe<FloatQueryOperatorInput>;
  base64: Maybe<StringQueryOperatorInput>;
  height: Maybe<FloatQueryOperatorInput>;
  originalName: Maybe<StringQueryOperatorInput>;
  src: Maybe<StringQueryOperatorInput>;
  srcSet: Maybe<StringQueryOperatorInput>;
  srcSetWebp: Maybe<StringQueryOperatorInput>;
  srcWebp: Maybe<StringQueryOperatorInput>;
  tracedSVG: Maybe<StringQueryOperatorInput>;
  width: Maybe<FloatQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: "ImageSharpFluid";
  aspectRatio: Scalars["Float"];
  base64: Maybe<Scalars["String"]>;
  originalImg: Maybe<Scalars["String"]>;
  originalName: Maybe<Scalars["String"]>;
  presentationHeight: Scalars["Int"];
  presentationWidth: Scalars["Int"];
  sizes: Scalars["String"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcSetWebp: Maybe<Scalars["String"]>;
  srcWebp: Maybe<Scalars["String"]>;
  tracedSVG: Maybe<Scalars["String"]>;
};

export type ImageSharpFluidFilterInput = {
  aspectRatio: Maybe<FloatQueryOperatorInput>;
  base64: Maybe<StringQueryOperatorInput>;
  originalImg: Maybe<StringQueryOperatorInput>;
  originalName: Maybe<StringQueryOperatorInput>;
  presentationHeight: Maybe<IntQueryOperatorInput>;
  presentationWidth: Maybe<IntQueryOperatorInput>;
  sizes: Maybe<StringQueryOperatorInput>;
  src: Maybe<StringQueryOperatorInput>;
  srcSet: Maybe<StringQueryOperatorInput>;
  srcSetWebp: Maybe<StringQueryOperatorInput>;
  srcWebp: Maybe<StringQueryOperatorInput>;
  tracedSVG: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: "ImageSharpGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ImageSharpEdge>;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
  group: Array<ImageSharpGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpOriginal = {
  __typename?: "ImageSharpOriginal";
  height: Maybe<Scalars["Float"]>;
  src: Maybe<Scalars["String"]>;
  width: Maybe<Scalars["Float"]>;
};

export type ImageSharpOriginalFilterInput = {
  height: Maybe<FloatQueryOperatorInput>;
  src: Maybe<StringQueryOperatorInput>;
  width: Maybe<FloatQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: "ImageSharpResize";
  aspectRatio: Maybe<Scalars["Float"]>;
  height: Maybe<Scalars["Int"]>;
  originalName: Maybe<Scalars["String"]>;
  src: Maybe<Scalars["String"]>;
  tracedSVG: Maybe<Scalars["String"]>;
  width: Maybe<Scalars["Int"]>;
};

export type ImageSharpResizeFilterInput = {
  aspectRatio: Maybe<FloatQueryOperatorInput>;
  height: Maybe<IntQueryOperatorInput>;
  originalName: Maybe<StringQueryOperatorInput>;
  src: Maybe<StringQueryOperatorInput>;
  tracedSVG: Maybe<StringQueryOperatorInput>;
  width: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type IntQueryOperatorInput = {
  eq: Maybe<Scalars["Int"]>;
  gt: Maybe<Scalars["Int"]>;
  gte: Maybe<Scalars["Int"]>;
  in: Maybe<Array<Maybe<Scalars["Int"]>>>;
  lt: Maybe<Scalars["Int"]>;
  lte: Maybe<Scalars["Int"]>;
  ne: Maybe<Scalars["Int"]>;
  nin: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

export type Internal = {
  __typename?: "Internal";
  content: Maybe<Scalars["String"]>;
  contentDigest: Scalars["String"];
  description: Maybe<Scalars["String"]>;
  fieldOwners: Maybe<Array<Maybe<Scalars["String"]>>>;
  ignoreType: Maybe<Scalars["Boolean"]>;
  mediaType: Maybe<Scalars["String"]>;
  owner: Scalars["String"];
  type: Scalars["String"];
};

export type InternalFilterInput = {
  content: Maybe<StringQueryOperatorInput>;
  contentDigest: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  fieldOwners: Maybe<StringQueryOperatorInput>;
  ignoreType: Maybe<BooleanQueryOperatorInput>;
  mediaType: Maybe<StringQueryOperatorInput>;
  owner: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
};

export type JpgOptions = {
  progressive: Maybe<Scalars["Boolean"]>;
  quality: Maybe<Scalars["Int"]>;
};

export type JsonQueryOperatorInput = {
  eq: Maybe<Scalars["JSON"]>;
  glob: Maybe<Scalars["JSON"]>;
  in: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  ne: Maybe<Scalars["JSON"]>;
  nin: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  regex: Maybe<Scalars["JSON"]>;
};

export type Mdx = Node & {
  __typename?: "Mdx";
  body: Scalars["String"];
  children: Array<Node>;
  excerpt: Scalars["String"];
  fields: Maybe<MdxFields>;
  fileAbsolutePath: Scalars["String"];
  frontmatter: Maybe<MdxFrontmatter>;
  headings: Maybe<Array<Maybe<MdxHeadingMdx>>>;
  html: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  internal: Internal;
  mdxAST: Maybe<Scalars["JSON"]>;
  parent: Maybe<Node>;
  rawBody: Scalars["String"];
  slug: Maybe<Scalars["String"]>;
  tableOfContents: Maybe<Scalars["JSON"]>;
  timeToRead: Maybe<Scalars["Int"]>;
  wordCount: Maybe<MdxWordCount>;
};

export type MdxExcerptArgs = {
  pruneLength?: Maybe<Scalars["Int"]>;
  truncate?: Maybe<Scalars["Boolean"]>;
};

export type MdxHeadingsArgs = {
  depth: Maybe<HeadingsMdx>;
};

export type MdxTableOfContentsArgs = {
  maxDepth: Maybe<Scalars["Int"]>;
};

export type MdxConnection = {
  __typename?: "MdxConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<MdxEdge>;
  group: Array<MdxGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};

export type MdxConnectionGroupArgs = {
  field: MdxFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type MdxConnectionMaxArgs = {
  field: MdxFieldsEnum;
};

export type MdxConnectionMinArgs = {
  field: MdxFieldsEnum;
};

export type MdxConnectionSumArgs = {
  field: MdxFieldsEnum;
};

export type MdxEdge = {
  __typename?: "MdxEdge";
  next: Maybe<Mdx>;
  node: Mdx;
  previous: Maybe<Mdx>;
};

export type MdxFields = {
  __typename?: "MdxFields";
  slug: Maybe<Scalars["String"]>;
};

export enum MdxFieldsEnum {
  Body = "body",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Excerpt = "excerpt",
  FieldsSlug = "fields___slug",
  FileAbsolutePath = "fileAbsolutePath",
  FrontmatterCategories = "frontmatter___categories",
  FrontmatterCreated = "frontmatter___created",
  FrontmatterDescription = "frontmatter___description",
  FrontmatterStack = "frontmatter___stack",
  FrontmatterTitle = "frontmatter___title",
  Headings = "headings",
  HeadingsDepth = "headings___depth",
  HeadingsValue = "headings___value",
  Html = "html",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  MdxAst = "mdxAST",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  RawBody = "rawBody",
  Slug = "slug",
  TableOfContents = "tableOfContents",
  TimeToRead = "timeToRead",
  WordCountParagraphs = "wordCount___paragraphs",
  WordCountSentences = "wordCount___sentences",
  WordCountWords = "wordCount___words",
}

export type MdxFieldsFilterInput = {
  slug: Maybe<StringQueryOperatorInput>;
};

export type MdxFilterInput = {
  body: Maybe<StringQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  fields: Maybe<MdxFieldsFilterInput>;
  fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<MdxFrontmatterFilterInput>;
  headings: Maybe<MdxHeadingMdxFilterListInput>;
  html: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  mdxAST: Maybe<JsonQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  rawBody: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  tableOfContents: Maybe<JsonQueryOperatorInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  wordCount: Maybe<MdxWordCountFilterInput>;
};

export type MdxFilterListInput = {
  elemMatch: Maybe<MdxFilterInput>;
};

export type MdxFrontmatter = {
  __typename?: "MdxFrontmatter";
  categories: Maybe<Array<Maybe<Scalars["String"]>>>;
  created: Maybe<Scalars["String"]>;
  description: Maybe<Scalars["String"]>;
  stack: Maybe<Array<Maybe<Scalars["String"]>>>;
  title: Scalars["String"];
};

export type MdxFrontmatterFilterInput = {
  categories: Maybe<StringQueryOperatorInput>;
  created: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  stack: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
};

export type MdxGroupConnection = {
  __typename?: "MdxGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<MdxEdge>;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
  group: Array<MdxGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type MdxGroupConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};

export type MdxGroupConnectionGroupArgs = {
  field: MdxFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type MdxGroupConnectionMaxArgs = {
  field: MdxFieldsEnum;
};

export type MdxGroupConnectionMinArgs = {
  field: MdxFieldsEnum;
};

export type MdxGroupConnectionSumArgs = {
  field: MdxFieldsEnum;
};

export type MdxHeadingMdx = {
  __typename?: "MdxHeadingMdx";
  depth: Maybe<Scalars["Int"]>;
  value: Maybe<Scalars["String"]>;
};

export type MdxHeadingMdxFilterInput = {
  depth: Maybe<IntQueryOperatorInput>;
  value: Maybe<StringQueryOperatorInput>;
};

export type MdxHeadingMdxFilterListInput = {
  elemMatch: Maybe<MdxHeadingMdxFilterInput>;
};

export type MdxSortInput = {
  fields: Maybe<Array<Maybe<MdxFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MdxWordCount = {
  __typename?: "MdxWordCount";
  paragraphs: Maybe<Scalars["Int"]>;
  sentences: Maybe<Scalars["Int"]>;
  words: Maybe<Scalars["Int"]>;
};

export type MdxWordCountFilterInput = {
  paragraphs: Maybe<IntQueryOperatorInput>;
  sentences: Maybe<IntQueryOperatorInput>;
  words: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  children: Array<Node>;
  id: Scalars["ID"];
  internal: Internal;
  parent: Maybe<Node>;
};

export type NodeFilterInput = {
  children: Maybe<NodeFilterListInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  parent: Maybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch: Maybe<NodeFilterInput>;
};

export type PngOptions = {
  compressionSpeed: Maybe<Scalars["Int"]>;
  quality: Maybe<Scalars["Int"]>;
};

export type PageInfo = {
  __typename?: "PageInfo";
  currentPage: Scalars["Int"];
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  itemCount: Scalars["Int"];
  pageCount: Scalars["Int"];
  perPage: Maybe<Scalars["Int"]>;
  totalCount: Scalars["Int"];
};

export type Potrace = {
  alphaMax: Maybe<Scalars["Float"]>;
  background: Maybe<Scalars["String"]>;
  blackOnWhite: Maybe<Scalars["Boolean"]>;
  color: Maybe<Scalars["String"]>;
  optCurve: Maybe<Scalars["Boolean"]>;
  optTolerance: Maybe<Scalars["Float"]>;
  threshold: Maybe<Scalars["Int"]>;
  turdSize: Maybe<Scalars["Float"]>;
  turnPolicy: Maybe<PotraceTurnPolicy>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = "TURNPOLICY_BLACK",
  TurnpolicyLeft = "TURNPOLICY_LEFT",
  TurnpolicyMajority = "TURNPOLICY_MAJORITY",
  TurnpolicyMinority = "TURNPOLICY_MINORITY",
  TurnpolicyRight = "TURNPOLICY_RIGHT",
  TurnpolicyWhite = "TURNPOLICY_WHITE",
}

export type Query = {
  __typename?: "Query";
  allDirectory: DirectoryConnection;
  allFile: FileConnection;
  allImageSharp: ImageSharpConnection;
  allMdx: MdxConnection;
  allSite: SiteConnection;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  allSiteFunction: SiteFunctionConnection;
  allSitePage: SitePageConnection;
  allSitePlugin: SitePluginConnection;
  directory: Maybe<Directory>;
  file: Maybe<File>;
  imageSharp: Maybe<ImageSharp>;
  mdx: Maybe<Mdx>;
  site: Maybe<Site>;
  siteBuildMetadata: Maybe<SiteBuildMetadata>;
  siteFunction: Maybe<SiteFunction>;
  sitePage: Maybe<SitePage>;
  sitePlugin: Maybe<SitePlugin>;
};

export type QueryAllDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
  sort: Maybe<DirectorySortInput>;
};

export type QueryAllFileArgs = {
  filter: Maybe<FileFilterInput>;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
  sort: Maybe<FileSortInput>;
};

export type QueryAllImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
  sort: Maybe<ImageSharpSortInput>;
};

export type QueryAllMdxArgs = {
  filter: Maybe<MdxFilterInput>;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
  sort: Maybe<MdxSortInput>;
};

export type QueryAllSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
  sort: Maybe<SiteSortInput>;
};

export type QueryAllSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
  sort: Maybe<SiteBuildMetadataSortInput>;
};

export type QueryAllSiteFunctionArgs = {
  filter: Maybe<SiteFunctionFilterInput>;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
  sort: Maybe<SiteFunctionSortInput>;
};

export type QueryAllSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
  sort: Maybe<SitePageSortInput>;
};

export type QueryAllSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
  sort: Maybe<SitePluginSortInput>;
};

export type QueryDirectoryArgs = {
  absolutePath: Maybe<StringQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  mode: Maybe<IntQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
};

export type QueryFileArgs = {
  absolutePath: Maybe<StringQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  childMdx: Maybe<MdxFilterInput>;
  children: Maybe<NodeFilterListInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  childrenMdx: Maybe<MdxFilterListInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  mode: Maybe<IntQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
};

export type QueryImageSharpArgs = {
  children: Maybe<NodeFilterListInput>;
  fixed: Maybe<ImageSharpFixedFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: Maybe<JsonQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  parent: Maybe<NodeFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
};

export type QueryMdxArgs = {
  body: Maybe<StringQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  fields: Maybe<MdxFieldsFilterInput>;
  fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<MdxFrontmatterFilterInput>;
  headings: Maybe<MdxHeadingMdxFilterListInput>;
  html: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  mdxAST: Maybe<JsonQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  rawBody: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  tableOfContents: Maybe<JsonQueryOperatorInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  wordCount: Maybe<MdxWordCountFilterInput>;
};

export type QuerySiteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  host: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  parent: Maybe<NodeFilterInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  port: Maybe<IntQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
};

export type QuerySiteBuildMetadataArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  parent: Maybe<NodeFilterInput>;
};

export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  functionRoute: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  pluginName: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
};

export type QuerySitePageArgs = {
  children: Maybe<NodeFilterListInput>;
  component: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  path: Maybe<StringQueryOperatorInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
};

export type QuerySitePluginArgs = {
  browserAPIs: Maybe<StringQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
  parent: Maybe<NodeFilterInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
};

export type Site = Node & {
  __typename?: "Site";
  buildTime: Maybe<Scalars["Date"]>;
  children: Array<Node>;
  host: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  internal: Internal;
  parent: Maybe<Node>;
  pathPrefix: Maybe<Scalars["String"]>;
  polyfill: Maybe<Scalars["Boolean"]>;
  port: Maybe<Scalars["Int"]>;
  siteMetadata: Maybe<SiteSiteMetadata>;
};

export type SiteBuildTimeArgs = {
  difference: Maybe<Scalars["String"]>;
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  locale: Maybe<Scalars["String"]>;
};

export type SiteBuildMetadata = Node & {
  __typename?: "SiteBuildMetadata";
  buildTime: Maybe<Scalars["Date"]>;
  children: Array<Node>;
  id: Scalars["ID"];
  internal: Internal;
  parent: Maybe<Node>;
};

export type SiteBuildMetadataBuildTimeArgs = {
  difference: Maybe<Scalars["String"]>;
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  locale: Maybe<Scalars["String"]>;
};

export type SiteBuildMetadataConnection = {
  __typename?: "SiteBuildMetadataConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SiteBuildMetadataEdge>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: "SiteBuildMetadataEdge";
  next: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  BuildTime = "buildTime",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
}

export type SiteBuildMetadataFilterInput = {
  buildTime: Maybe<DateQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  parent: Maybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: "SiteBuildMetadataGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SiteBuildMetadataEdge>;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataSortInput = {
  fields: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: "SiteConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SiteEdge>;
  group: Array<SiteGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: "SiteEdge";
  next: Maybe<Site>;
  node: Site;
  previous: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = "buildTime",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Host = "host",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PathPrefix = "pathPrefix",
  Polyfill = "polyfill",
  Port = "port",
  SiteMetadataDescription = "siteMetadata___description",
  SiteMetadataGithub = "siteMetadata___github",
  SiteMetadataImage = "siteMetadata___image",
  SiteMetadataLinkedin = "siteMetadata___linkedin",
  SiteMetadataSiteUrl = "siteMetadata___siteUrl",
  SiteMetadataTitle = "siteMetadata___title",
  SiteMetadataTitleTemplate = "siteMetadata___titleTemplate",
  SiteMetadataTwitterUsername = "siteMetadata___twitterUsername",
}

export type SiteFilterInput = {
  buildTime: Maybe<DateQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  host: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  parent: Maybe<NodeFilterInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  port: Maybe<IntQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
};

export type SiteFunction = Node & {
  __typename?: "SiteFunction";
  absoluteCompiledFilePath: Scalars["String"];
  children: Array<Node>;
  functionRoute: Scalars["String"];
  id: Scalars["ID"];
  internal: Internal;
  matchPath: Maybe<Scalars["String"]>;
  originalAbsoluteFilePath: Scalars["String"];
  originalRelativeFilePath: Scalars["String"];
  parent: Maybe<Node>;
  pluginName: Scalars["String"];
  relativeCompiledFilePath: Scalars["String"];
};

export type SiteFunctionConnection = {
  __typename?: "SiteFunctionConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SiteFunctionEdge>;
  group: Array<SiteFunctionGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  __typename?: "SiteFunctionEdge";
  next: Maybe<SiteFunction>;
  node: SiteFunction;
  previous: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
  AbsoluteCompiledFilePath = "absoluteCompiledFilePath",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  FunctionRoute = "functionRoute",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  MatchPath = "matchPath",
  OriginalAbsoluteFilePath = "originalAbsoluteFilePath",
  OriginalRelativeFilePath = "originalRelativeFilePath",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PluginName = "pluginName",
  RelativeCompiledFilePath = "relativeCompiledFilePath",
}

export type SiteFunctionFilterInput = {
  absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  functionRoute: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  pluginName: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
};

export type SiteFunctionGroupConnection = {
  __typename?: "SiteFunctionGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SiteFunctionEdge>;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
  group: Array<SiteFunctionGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionSortInput = {
  fields: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  __typename?: "SiteGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SiteEdge>;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
  group: Array<SiteGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SitePage = Node & {
  __typename?: "SitePage";
  children: Array<Node>;
  component: Scalars["String"];
  componentChunkName: Scalars["String"];
  context: Maybe<SitePageContext>;
  id: Scalars["ID"];
  internal: Internal;
  internalComponentName: Scalars["String"];
  isCreatedByStatefulCreatePages: Maybe<Scalars["Boolean"]>;
  matchPath: Maybe<Scalars["String"]>;
  parent: Maybe<Node>;
  path: Scalars["String"];
  pluginCreator: Maybe<SitePlugin>;
  pluginCreatorId: Maybe<Scalars["String"]>;
};

export type SitePageConnection = {
  __typename?: "SitePageConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SitePageEdge>;
  group: Array<SitePageGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  __typename?: "SitePageContext";
  id: Maybe<Scalars["String"]>;
};

export type SitePageContextFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  __typename?: "SitePageEdge";
  next: Maybe<SitePage>;
  node: SitePage;
  previous: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Component = "component",
  ComponentChunkName = "componentChunkName",
  ContextId = "context___id",
  Id = "id",
  InternalComponentName = "internalComponentName",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  IsCreatedByStatefulCreatePages = "isCreatedByStatefulCreatePages",
  MatchPath = "matchPath",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  Path = "path",
  PluginCreatorId = "pluginCreatorId",
  PluginCreatorBrowserApIs = "pluginCreator___browserAPIs",
  PluginCreatorChildren = "pluginCreator___children",
  PluginCreatorChildrenChildren = "pluginCreator___children___children",
  PluginCreatorChildrenChildrenChildren = "pluginCreator___children___children___children",
  PluginCreatorChildrenChildrenId = "pluginCreator___children___children___id",
  PluginCreatorChildrenId = "pluginCreator___children___id",
  PluginCreatorChildrenInternalContent = "pluginCreator___children___internal___content",
  PluginCreatorChildrenInternalContentDigest = "pluginCreator___children___internal___contentDigest",
  PluginCreatorChildrenInternalDescription = "pluginCreator___children___internal___description",
  PluginCreatorChildrenInternalFieldOwners = "pluginCreator___children___internal___fieldOwners",
  PluginCreatorChildrenInternalIgnoreType = "pluginCreator___children___internal___ignoreType",
  PluginCreatorChildrenInternalMediaType = "pluginCreator___children___internal___mediaType",
  PluginCreatorChildrenInternalOwner = "pluginCreator___children___internal___owner",
  PluginCreatorChildrenInternalType = "pluginCreator___children___internal___type",
  PluginCreatorChildrenParentChildren = "pluginCreator___children___parent___children",
  PluginCreatorChildrenParentId = "pluginCreator___children___parent___id",
  PluginCreatorId = "pluginCreator___id",
  PluginCreatorInternalContent = "pluginCreator___internal___content",
  PluginCreatorInternalContentDigest = "pluginCreator___internal___contentDigest",
  PluginCreatorInternalDescription = "pluginCreator___internal___description",
  PluginCreatorInternalFieldOwners = "pluginCreator___internal___fieldOwners",
  PluginCreatorInternalIgnoreType = "pluginCreator___internal___ignoreType",
  PluginCreatorInternalMediaType = "pluginCreator___internal___mediaType",
  PluginCreatorInternalOwner = "pluginCreator___internal___owner",
  PluginCreatorInternalType = "pluginCreator___internal___type",
  PluginCreatorName = "pluginCreator___name",
  PluginCreatorNodeApIs = "pluginCreator___nodeAPIs",
  PluginCreatorPackageJsonAuthor = "pluginCreator___packageJson___author",
  PluginCreatorPackageJsonDependencies = "pluginCreator___packageJson___dependencies",
  PluginCreatorPackageJsonDependenciesName = "pluginCreator___packageJson___dependencies___name",
  PluginCreatorPackageJsonDependenciesVersion = "pluginCreator___packageJson___dependencies___version",
  PluginCreatorPackageJsonDescription = "pluginCreator___packageJson___description",
  PluginCreatorPackageJsonDevDependencies = "pluginCreator___packageJson___devDependencies",
  PluginCreatorPackageJsonDevDependenciesName = "pluginCreator___packageJson___devDependencies___name",
  PluginCreatorPackageJsonDevDependenciesVersion = "pluginCreator___packageJson___devDependencies___version",
  PluginCreatorPackageJsonKeywords = "pluginCreator___packageJson___keywords",
  PluginCreatorPackageJsonLicense = "pluginCreator___packageJson___license",
  PluginCreatorPackageJsonMain = "pluginCreator___packageJson___main",
  PluginCreatorPackageJsonName = "pluginCreator___packageJson___name",
  PluginCreatorPackageJsonPeerDependencies = "pluginCreator___packageJson___peerDependencies",
  PluginCreatorPackageJsonPeerDependenciesName = "pluginCreator___packageJson___peerDependencies___name",
  PluginCreatorPackageJsonPeerDependenciesVersion = "pluginCreator___packageJson___peerDependencies___version",
  PluginCreatorPackageJsonVersion = "pluginCreator___packageJson___version",
  PluginCreatorParentChildren = "pluginCreator___parent___children",
  PluginCreatorParentChildrenChildren = "pluginCreator___parent___children___children",
  PluginCreatorParentChildrenId = "pluginCreator___parent___children___id",
  PluginCreatorParentId = "pluginCreator___parent___id",
  PluginCreatorParentInternalContent = "pluginCreator___parent___internal___content",
  PluginCreatorParentInternalContentDigest = "pluginCreator___parent___internal___contentDigest",
  PluginCreatorParentInternalDescription = "pluginCreator___parent___internal___description",
  PluginCreatorParentInternalFieldOwners = "pluginCreator___parent___internal___fieldOwners",
  PluginCreatorParentInternalIgnoreType = "pluginCreator___parent___internal___ignoreType",
  PluginCreatorParentInternalMediaType = "pluginCreator___parent___internal___mediaType",
  PluginCreatorParentInternalOwner = "pluginCreator___parent___internal___owner",
  PluginCreatorParentInternalType = "pluginCreator___parent___internal___type",
  PluginCreatorParentParentChildren = "pluginCreator___parent___parent___children",
  PluginCreatorParentParentId = "pluginCreator___parent___parent___id",
  PluginCreatorPluginFilepath = "pluginCreator___pluginFilepath",
  PluginCreatorPluginOptionsAllExtensions = "pluginCreator___pluginOptions___allExtensions",
  PluginCreatorPluginOptionsBackgroundColor = "pluginCreator___pluginOptions___background_color",
  PluginCreatorPluginOptionsBase64Width = "pluginCreator___pluginOptions___base64Width",
  PluginCreatorPluginOptionsCacheDigest = "pluginCreator___pluginOptions___cacheDigest",
  PluginCreatorPluginOptionsCacheBustingMode = "pluginCreator___pluginOptions___cache_busting_mode",
  PluginCreatorPluginOptionsCreateLinkInHead = "pluginCreator___pluginOptions___createLinkInHead",
  PluginCreatorPluginOptionsCrossOrigin = "pluginCreator___pluginOptions___crossOrigin",
  PluginCreatorPluginOptionsDefaultQuality = "pluginCreator___pluginOptions___defaultQuality",
  PluginCreatorPluginOptionsDisableVendorPrefixes = "pluginCreator___pluginOptions___disableVendorPrefixes",
  PluginCreatorPluginOptionsDisplay = "pluginCreator___pluginOptions___display",
  PluginCreatorPluginOptionsDisplayName = "pluginCreator___pluginOptions___displayName",
  PluginCreatorPluginOptionsEntryLimit = "pluginCreator___pluginOptions___entryLimit",
  PluginCreatorPluginOptionsExtensions = "pluginCreator___pluginOptions___extensions",
  PluginCreatorPluginOptionsFailOnError = "pluginCreator___pluginOptions___failOnError",
  PluginCreatorPluginOptionsFileName = "pluginCreator___pluginOptions___fileName",
  PluginCreatorPluginOptionsIcon = "pluginCreator___pluginOptions___icon",
  PluginCreatorPluginOptionsIncludeFavicon = "pluginCreator___pluginOptions___include_favicon",
  PluginCreatorPluginOptionsIsTsx = "pluginCreator___pluginOptions___isTSX",
  PluginCreatorPluginOptionsJsxPragma = "pluginCreator___pluginOptions___jsxPragma",
  PluginCreatorPluginOptionsLegacy = "pluginCreator___pluginOptions___legacy",
  PluginCreatorPluginOptionsLessBabel = "pluginCreator___pluginOptions___lessBabel",
  PluginCreatorPluginOptionsMediaTypes = "pluginCreator___pluginOptions___mediaTypes",
  PluginCreatorPluginOptionsMinify = "pluginCreator___pluginOptions___minify",
  PluginCreatorPluginOptionsName = "pluginCreator___pluginOptions___name",
  PluginCreatorPluginOptionsNamespace = "pluginCreator___pluginOptions___namespace",
  PluginCreatorPluginOptionsOutput = "pluginCreator___pluginOptions___output",
  PluginCreatorPluginOptionsPath = "pluginCreator___pluginOptions___path",
  PluginCreatorPluginOptionsPathCheck = "pluginCreator___pluginOptions___pathCheck",
  PluginCreatorPluginOptionsPure = "pluginCreator___pluginOptions___pure",
  PluginCreatorPluginOptionsQuery = "pluginCreator___pluginOptions___query",
  PluginCreatorPluginOptionsRoot = "pluginCreator___pluginOptions___root",
  PluginCreatorPluginOptionsShortName = "pluginCreator___pluginOptions___short_name",
  PluginCreatorPluginOptionsStartUrl = "pluginCreator___pluginOptions___start_url",
  PluginCreatorPluginOptionsStripMetadata = "pluginCreator___pluginOptions___stripMetadata",
  PluginCreatorPluginOptionsThemeColor = "pluginCreator___pluginOptions___theme_color",
  PluginCreatorPluginOptionsThemeColorInHead = "pluginCreator___pluginOptions___theme_color_in_head",
  PluginCreatorPluginOptionsTranspileTemplateLiterals = "pluginCreator___pluginOptions___transpileTemplateLiterals",
  PluginCreatorResolve = "pluginCreator___resolve",
  PluginCreatorSsrApIs = "pluginCreator___ssrAPIs",
  PluginCreatorVersion = "pluginCreator___version",
}

export type SitePageFilterInput = {
  children: Maybe<NodeFilterListInput>;
  component: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  path: Maybe<StringQueryOperatorInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  __typename?: "SitePageGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SitePageEdge>;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
  group: Array<SitePageGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageSortInput = {
  fields: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: "SitePlugin";
  browserAPIs: Maybe<Array<Maybe<Scalars["String"]>>>;
  children: Array<Node>;
  id: Scalars["ID"];
  internal: Internal;
  name: Maybe<Scalars["String"]>;
  nodeAPIs: Maybe<Array<Maybe<Scalars["String"]>>>;
  packageJson: Maybe<SitePluginPackageJson>;
  parent: Maybe<Node>;
  pluginFilepath: Maybe<Scalars["String"]>;
  pluginOptions: Maybe<SitePluginPluginOptions>;
  resolve: Maybe<Scalars["String"]>;
  ssrAPIs: Maybe<Array<Maybe<Scalars["String"]>>>;
  version: Maybe<Scalars["String"]>;
};

export type SitePluginConnection = {
  __typename?: "SitePluginConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SitePluginEdge>;
  group: Array<SitePluginGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: "SitePluginEdge";
  next: Maybe<SitePlugin>;
  node: SitePlugin;
  previous: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  BrowserApIs = "browserAPIs",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Name = "name",
  NodeApIs = "nodeAPIs",
  PackageJsonAuthor = "packageJson___author",
  PackageJsonDependencies = "packageJson___dependencies",
  PackageJsonDependenciesName = "packageJson___dependencies___name",
  PackageJsonDependenciesVersion = "packageJson___dependencies___version",
  PackageJsonDescription = "packageJson___description",
  PackageJsonDevDependencies = "packageJson___devDependencies",
  PackageJsonDevDependenciesName = "packageJson___devDependencies___name",
  PackageJsonDevDependenciesVersion = "packageJson___devDependencies___version",
  PackageJsonKeywords = "packageJson___keywords",
  PackageJsonLicense = "packageJson___license",
  PackageJsonMain = "packageJson___main",
  PackageJsonName = "packageJson___name",
  PackageJsonPeerDependencies = "packageJson___peerDependencies",
  PackageJsonPeerDependenciesName = "packageJson___peerDependencies___name",
  PackageJsonPeerDependenciesVersion = "packageJson___peerDependencies___version",
  PackageJsonVersion = "packageJson___version",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PluginFilepath = "pluginFilepath",
  PluginOptionsAllExtensions = "pluginOptions___allExtensions",
  PluginOptionsBackgroundColor = "pluginOptions___background_color",
  PluginOptionsBase64Width = "pluginOptions___base64Width",
  PluginOptionsCacheDigest = "pluginOptions___cacheDigest",
  PluginOptionsCacheBustingMode = "pluginOptions___cache_busting_mode",
  PluginOptionsCreateLinkInHead = "pluginOptions___createLinkInHead",
  PluginOptionsCrossOrigin = "pluginOptions___crossOrigin",
  PluginOptionsDefaultQuality = "pluginOptions___defaultQuality",
  PluginOptionsDisableVendorPrefixes = "pluginOptions___disableVendorPrefixes",
  PluginOptionsDisplay = "pluginOptions___display",
  PluginOptionsDisplayName = "pluginOptions___displayName",
  PluginOptionsEntryLimit = "pluginOptions___entryLimit",
  PluginOptionsExtensions = "pluginOptions___extensions",
  PluginOptionsFailOnError = "pluginOptions___failOnError",
  PluginOptionsFileName = "pluginOptions___fileName",
  PluginOptionsIcon = "pluginOptions___icon",
  PluginOptionsIncludeFavicon = "pluginOptions___include_favicon",
  PluginOptionsIsTsx = "pluginOptions___isTSX",
  PluginOptionsJsxPragma = "pluginOptions___jsxPragma",
  PluginOptionsLegacy = "pluginOptions___legacy",
  PluginOptionsLessBabel = "pluginOptions___lessBabel",
  PluginOptionsMediaTypes = "pluginOptions___mediaTypes",
  PluginOptionsMinify = "pluginOptions___minify",
  PluginOptionsName = "pluginOptions___name",
  PluginOptionsNamespace = "pluginOptions___namespace",
  PluginOptionsOutput = "pluginOptions___output",
  PluginOptionsPath = "pluginOptions___path",
  PluginOptionsPathCheck = "pluginOptions___pathCheck",
  PluginOptionsPure = "pluginOptions___pure",
  PluginOptionsQuery = "pluginOptions___query",
  PluginOptionsRoot = "pluginOptions___root",
  PluginOptionsShortName = "pluginOptions___short_name",
  PluginOptionsStartUrl = "pluginOptions___start_url",
  PluginOptionsStripMetadata = "pluginOptions___stripMetadata",
  PluginOptionsThemeColor = "pluginOptions___theme_color",
  PluginOptionsThemeColorInHead = "pluginOptions___theme_color_in_head",
  PluginOptionsTranspileTemplateLiterals = "pluginOptions___transpileTemplateLiterals",
  Resolve = "resolve",
  SsrApIs = "ssrAPIs",
  Version = "version",
}

export type SitePluginFilterInput = {
  browserAPIs: Maybe<StringQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
  parent: Maybe<NodeFilterInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
  __typename?: "SitePluginGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SitePluginEdge>;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
  group: Array<SitePluginGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginPackageJson = {
  __typename?: "SitePluginPackageJson";
  author: Maybe<Scalars["String"]>;
  dependencies: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  description: Maybe<Scalars["String"]>;
  devDependencies: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  keywords: Maybe<Array<Maybe<Scalars["String"]>>>;
  license: Maybe<Scalars["String"]>;
  main: Maybe<Scalars["String"]>;
  name: Maybe<Scalars["String"]>;
  peerDependencies: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  version: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: "SitePluginPackageJsonDependencies";
  name: Maybe<Scalars["String"]>;
  version: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: "SitePluginPackageJsonDevDependencies";
  name: Maybe<Scalars["String"]>;
  version: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  author: Maybe<StringQueryOperatorInput>;
  dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  description: Maybe<StringQueryOperatorInput>;
  devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  keywords: Maybe<StringQueryOperatorInput>;
  license: Maybe<StringQueryOperatorInput>;
  main: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: "SitePluginPackageJsonPeerDependencies";
  name: Maybe<Scalars["String"]>;
  version: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: "SitePluginPluginOptions";
  allExtensions: Maybe<Scalars["Boolean"]>;
  background_color: Maybe<Scalars["String"]>;
  base64Width: Maybe<Scalars["Int"]>;
  cacheDigest: Maybe<Scalars["String"]>;
  cache_busting_mode: Maybe<Scalars["String"]>;
  createLinkInHead: Maybe<Scalars["Boolean"]>;
  crossOrigin: Maybe<Scalars["String"]>;
  defaultQuality: Maybe<Scalars["Int"]>;
  disableVendorPrefixes: Maybe<Scalars["Boolean"]>;
  display: Maybe<Scalars["String"]>;
  displayName: Maybe<Scalars["Boolean"]>;
  entryLimit: Maybe<Scalars["Int"]>;
  extensions: Maybe<Array<Maybe<Scalars["String"]>>>;
  failOnError: Maybe<Scalars["Boolean"]>;
  fileName: Maybe<Scalars["Boolean"]>;
  icon: Maybe<Scalars["String"]>;
  include_favicon: Maybe<Scalars["Boolean"]>;
  isTSX: Maybe<Scalars["Boolean"]>;
  jsxPragma: Maybe<Scalars["String"]>;
  legacy: Maybe<Scalars["Boolean"]>;
  lessBabel: Maybe<Scalars["Boolean"]>;
  mediaTypes: Maybe<Array<Maybe<Scalars["String"]>>>;
  minify: Maybe<Scalars["Boolean"]>;
  name: Maybe<Scalars["String"]>;
  namespace: Maybe<Scalars["String"]>;
  output: Maybe<Scalars["String"]>;
  path: Maybe<Scalars["String"]>;
  pathCheck: Maybe<Scalars["Boolean"]>;
  pure: Maybe<Scalars["Boolean"]>;
  query: Maybe<Scalars["String"]>;
  root: Maybe<Scalars["String"]>;
  short_name: Maybe<Scalars["String"]>;
  start_url: Maybe<Scalars["String"]>;
  stripMetadata: Maybe<Scalars["Boolean"]>;
  theme_color: Maybe<Scalars["String"]>;
  theme_color_in_head: Maybe<Scalars["Boolean"]>;
  transpileTemplateLiterals: Maybe<Scalars["Boolean"]>;
};

export type SitePluginPluginOptionsFilterInput = {
  allExtensions: Maybe<BooleanQueryOperatorInput>;
  background_color: Maybe<StringQueryOperatorInput>;
  base64Width: Maybe<IntQueryOperatorInput>;
  cacheDigest: Maybe<StringQueryOperatorInput>;
  cache_busting_mode: Maybe<StringQueryOperatorInput>;
  createLinkInHead: Maybe<BooleanQueryOperatorInput>;
  crossOrigin: Maybe<StringQueryOperatorInput>;
  defaultQuality: Maybe<IntQueryOperatorInput>;
  disableVendorPrefixes: Maybe<BooleanQueryOperatorInput>;
  display: Maybe<StringQueryOperatorInput>;
  displayName: Maybe<BooleanQueryOperatorInput>;
  entryLimit: Maybe<IntQueryOperatorInput>;
  extensions: Maybe<StringQueryOperatorInput>;
  failOnError: Maybe<BooleanQueryOperatorInput>;
  fileName: Maybe<BooleanQueryOperatorInput>;
  icon: Maybe<StringQueryOperatorInput>;
  include_favicon: Maybe<BooleanQueryOperatorInput>;
  isTSX: Maybe<BooleanQueryOperatorInput>;
  jsxPragma: Maybe<StringQueryOperatorInput>;
  legacy: Maybe<BooleanQueryOperatorInput>;
  lessBabel: Maybe<BooleanQueryOperatorInput>;
  mediaTypes: Maybe<StringQueryOperatorInput>;
  minify: Maybe<BooleanQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  namespace: Maybe<StringQueryOperatorInput>;
  output: Maybe<StringQueryOperatorInput>;
  path: Maybe<StringQueryOperatorInput>;
  pathCheck: Maybe<BooleanQueryOperatorInput>;
  pure: Maybe<BooleanQueryOperatorInput>;
  query: Maybe<StringQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  short_name: Maybe<StringQueryOperatorInput>;
  start_url: Maybe<StringQueryOperatorInput>;
  stripMetadata: Maybe<BooleanQueryOperatorInput>;
  theme_color: Maybe<StringQueryOperatorInput>;
  theme_color_in_head: Maybe<BooleanQueryOperatorInput>;
  transpileTemplateLiterals: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: "SiteSiteMetadata";
  description: Maybe<Scalars["String"]>;
  github: Maybe<Scalars["String"]>;
  image: Maybe<Scalars["String"]>;
  linkedin: Maybe<Scalars["String"]>;
  siteUrl: Maybe<Scalars["String"]>;
  title: Maybe<Scalars["String"]>;
  titleTemplate: Maybe<Scalars["String"]>;
  twitterUsername: Maybe<Scalars["String"]>;
};

export type SiteSiteMetadataFilterInput = {
  description: Maybe<StringQueryOperatorInput>;
  github: Maybe<StringQueryOperatorInput>;
  image: Maybe<StringQueryOperatorInput>;
  linkedin: Maybe<StringQueryOperatorInput>;
  siteUrl: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  titleTemplate: Maybe<StringQueryOperatorInput>;
  twitterUsername: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = "ASC",
  Desc = "DESC",
}

export type StringQueryOperatorInput = {
  eq: Maybe<Scalars["String"]>;
  glob: Maybe<Scalars["String"]>;
  in: Maybe<Array<Maybe<Scalars["String"]>>>;
  ne: Maybe<Scalars["String"]>;
  nin: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex: Maybe<Scalars["String"]>;
};

export type TransformOptions = {
  cropFocus: Maybe<ImageCropFocus>;
  duotone: Maybe<DuotoneGradient>;
  fit: Maybe<ImageFit>;
  grayscale: Maybe<Scalars["Boolean"]>;
  rotate: Maybe<Scalars["Int"]>;
  trim: Maybe<Scalars["Float"]>;
};

export type WebPOptions = {
  quality: Maybe<Scalars["Int"]>;
};

export type GatsbyImageSharpFixedFragment = {
  __typename?: "ImageSharpFixed";
  base64: Maybe<string>;
  width: number;
  height: number;
  src: string;
  srcSet: string;
};

export type GatsbyImageSharpFixed_TracedSvgFragment = {
  __typename?: "ImageSharpFixed";
  tracedSVG: Maybe<string>;
  width: number;
  height: number;
  src: string;
  srcSet: string;
};

export type GatsbyImageSharpFixed_WithWebpFragment = {
  __typename?: "ImageSharpFixed";
  base64: Maybe<string>;
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp: Maybe<string>;
  srcSetWebp: Maybe<string>;
};

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = {
  __typename?: "ImageSharpFixed";
  tracedSVG: Maybe<string>;
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp: Maybe<string>;
  srcSetWebp: Maybe<string>;
};

export type GatsbyImageSharpFixed_NoBase64Fragment = {
  __typename?: "ImageSharpFixed";
  width: number;
  height: number;
  src: string;
  srcSet: string;
};

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = {
  __typename?: "ImageSharpFixed";
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp: Maybe<string>;
  srcSetWebp: Maybe<string>;
};

export type GatsbyImageSharpFluidFragment = {
  __typename?: "ImageSharpFluid";
  base64: Maybe<string>;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = {
  __typename?: "ImageSharpFluid";
  maxHeight: number;
  maxWidth: number;
};

export type GatsbyImageSharpFluid_TracedSvgFragment = {
  __typename?: "ImageSharpFluid";
  tracedSVG: Maybe<string>;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};

export type GatsbyImageSharpFluid_WithWebpFragment = {
  __typename?: "ImageSharpFluid";
  base64: Maybe<string>;
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp: Maybe<string>;
  srcSetWebp: Maybe<string>;
  sizes: string;
};

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = {
  __typename?: "ImageSharpFluid";
  tracedSVG: Maybe<string>;
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp: Maybe<string>;
  srcSetWebp: Maybe<string>;
  sizes: string;
};

export type GatsbyImageSharpFluid_NoBase64Fragment = {
  __typename?: "ImageSharpFluid";
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = {
  __typename?: "ImageSharpFluid";
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp: Maybe<string>;
  srcSetWebp: Maybe<string>;
  sizes: string;
};

export type SeoQueryVariables = Exact<{ [key: string]: never }>;

export type SeoQuery = {
  __typename?: "Query";
  site: Maybe<{
    __typename?: "Site";
    siteMetadata: Maybe<{
      __typename?: "SiteSiteMetadata";
      titleTemplate: Maybe<string>;
      siteUrl: Maybe<string>;
      twitterUsername: Maybe<string>;
      github: Maybe<string>;
      defaultTitle: Maybe<string>;
      defaultDescription: Maybe<string>;
      defaultImage: Maybe<string>;
    }>;
  }>;
};

export type PostQueryVariables = Exact<{
  id: Maybe<Scalars["String"]>;
}>;

export type PostQuery = {
  __typename?: "Query";
  mdx: Maybe<{
    __typename?: "Mdx";
    body: string;
    excerpt: string;
    id: string;
    timeToRead: Maybe<number>;
    slug: Maybe<string>;
    headings: Maybe<
      Array<Maybe<{ __typename?: "MdxHeadingMdx"; depth: Maybe<number>; value: Maybe<string> }>>
    >;
    frontmatter: Maybe<{
      __typename?: "MdxFrontmatter";
      categories: Maybe<Array<Maybe<string>>>;
      created: Maybe<string>;
      description: Maybe<string>;
      stack: Maybe<Array<Maybe<string>>>;
      title: string;
    }>;
  }>;
};
