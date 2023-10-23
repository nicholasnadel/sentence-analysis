public with sharing class ContentDocumentAccessor {
  @AuraEnabled(cacheable=true)
  public static List<FileData> getAllFileData() {
    List<ContentVersion> versionRecords = [
      SELECT Title, VersionData
      FROM ContentVersion
      WHERE FileType = 'TEXT' AND IsLatest = true
    ];

    List<FileData> fileData = new List<FileData>();
    for (ContentVersion versionRecord : versionRecords) {
      fileData.add(new FileData(versionRecord.Id, versionRecord.Title, versionRecord.VersionData.toString()));
    }

    return fileData;
  }

  private class FileData {
    @AuraEnabled
    public Id id;

    @AuraEnabled
    public String title;

    @AuraEnabled
    public String content;

    public FileData(Id id, String title, String content) {
      this.id = id;
      this.title = title;
      this.content = content;
    }
  }
}
