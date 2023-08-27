"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[2567],{

/***/ 89642:
/***/ ((module) => {

module.exports = JSON.parse('{"attribute.boolean":"불리언(Boolean)","attribute.boolean.description":"예 아니오, 1 또는 0, 참 또는 거짓","attribute.component":"컴포넌트","attribute.component.description":"반복하거나 재사용할 수 있는 필드 그룹","attribute.date":"날짜(Date)","attribute.date.description":"시간, 분, 초가 있는 데이트 피커","attribute.datetime":"Datetime","attribute.dynamiczone":"다이나믹 존","attribute.dynamiczone.description":"내용을 편집할 때 동적으로 컴포넌트를 선택합니다.","attribute.email":"이메일(Email)","attribute.email.description":"유효성 검사가 가능한 이메일 필드","attribute.enumeration":"열거(Enumeration)","attribute.enumeration.description":"값을 나열하고 선택할 수 있습니다.","attribute.json":"JSON","attribute.json.description":"JSON 형식의 데이터","attribute.media":"미디어(Media)","attribute.media.description":"이미지, 비디오 등의 파일","attribute.null":" ","attribute.number":"숫자(Number)","attribute.number.description":"숫자 (integer, float, decimal)","attribute.password":"패스워드(Password)","attribute.password.description":"암호화된 비밀번호 필드","attribute.relation":"관계(Relation)","attribute.relation.description":"콜렉션 타입을 참조하는 필드","attribute.richtext":"서식있는 텍스트(Rich text)","attribute.richtext.description":"서식 옵션이 있는 리치 텍스트 에디터","attribute.text":"텍스트(Text)","attribute.text.description":"제목 또는 설명과 같이 짧거나 긴 텍스트","attribute.time":"Time","attribute.timestamp":"타임스탬프","attribute.uid":"UID","attribute.uid.description":"Unique identifier","button.attributes.add.another":"새 필드 추가","button.component.add":"새 컴포넌트 추가","button.component.create":"새 컴포넌트 생성","button.model.create":"새 콜렉션 타입 생성","button.single-types.create":"새 싱글 타입 생성","component.repeatable":"(repeatable)","components.SelectComponents.displayed-value":"{number, plural, =0 {# 개} one {# 개} other {# 개}}의 컴포넌트가 선택됨","components.componentSelect.no-component-available":"이미 모든 컴포넌트가 추가되었습니다.","components.componentSelect.no-component-available.with-search":"검색과 일치하는 컴포넌트가 없습니다.","components.componentSelect.value-component":"{number} component selected (type to search for a component)","components.componentSelect.value-components":"{number} 개의 컴포넌트 선택됨","configurations":"설정","contentType.apiId-plural.description":"복수 형식의 API ID","contentType.apiId-plural.label":"API ID (복수)","contentType.apiId-singular.description":"UID는 API 경로 및 데이터베이스 테이블/ 컬렉션을 생성하는 데 사용됩니다.","contentType.apiId-singular.label":"API ID (단수)","contentType.collectionName.description":"콘텐츠 타입과 테이블 이름이 다를 때 유용합니다.","contentType.collectionName.label":"콜렉션 이름","contentType.displayName.label":"표시 이름","contentType.draftAndPublish.description":"각 항목을 발행하기 전에 초안 버전을 작성합니다.","contentType.draftAndPublish.label":"초안/발행 시스템","contentType.kind.change.warning":"콘텐츠 타입을 수정했습니다. API가 리셋됩니다(라우트, 컨트롤러, 서비스가 덮어씌워집니다.)","error.attributeName.reserved-name":"이 이름은 다른 기능을 손상시킬 수 있으므로 사용할 수 없습니다.","error.contentType.pluralName-used":"이 값은 단수 이름과 같을 수 없습니다.","error.contentType.singularName-used":"이 값은 복수 이름과 같을 수 없습니다.","error.contentTypeName.reserved-name":"이 이름은 다른 기능을 손상시킬 수 있으므로 사용할 수 없습니다.","error.validation.enum-duplicate":"중복된 값은 사용할 수 없습니다.","error.validation.enum-empty-string":"빈 문자열은 사용할 수 없습니다.","error.validation.minSupMax":"Can\'t be superior","error.validation.positive":"양수를 입력해주세요.","error.validation.regex":"유효하지 않은 정규식 패턴입니다.","error.validation.relation.targetAttribute-taken":"대상 릴레이션에서 사용중인 이름입니다.","form.attribute.component.option.add":"새 컴포넌트 추가","form.attribute.component.option.create":"새 컴포넌트 생성","form.attribute.component.option.create.description":"컴포넌트는 콘텐츠 타입과 컴포넌트들 사이에 공유되며, 어디서나 사용과 접근이 가능합니다.","form.attribute.component.option.repeatable":"반복 컴포넌트","form.attribute.component.option.repeatable.description":"재료, 메타 태그 등 여러 인스턴스(배열) 구성에 적합합니다.","form.attribute.component.option.reuse-existing":"기존 컴포넌트 사용","form.attribute.component.option.reuse-existing.description":"생성된 컴포넌트를 재사용합니다. 콘텐츠 타입간에 데이터를 일관되게 유지할 수 있습니다.","form.attribute.component.option.single":"단일 컴포넌트","form.attribute.component.option.single.description":"전체 주소지, 기본 정보 등과 같은 필드를 그룹화하는 데 적합합니다.","form.attribute.item.customColumnName":"커스텀 컬럼 이름","form.attribute.item.customColumnName.description":"API 응답을 위해 데이터베이스 컬럼 이름을 포괄적인 형식으로 변경하는데 유용합니다.","form.attribute.item.defineRelation.fieldName":"필드 이름","form.attribute.item.enumeration.graphql":"GraphQL에서 사용할 이름","form.attribute.item.enumeration.graphql.description":"기본 생성된 이름을 GraphQL에서 사용합니다.","form.attribute.item.enumeration.placeholder":"Ex:\\nmorning\\nnoon\\nevening","form.attribute.item.enumeration.rules":"값 (한 줄에 하나씩 입력)","form.attribute.item.maximum":"최대 값","form.attribute.item.maximumLength":"최대 길이","form.attribute.item.minimum":"최소 값","form.attribute.item.minimumLength":"최소 길이","form.attribute.item.number.type":"숫자 형식","form.attribute.item.number.type.biginteger":"big integer (ex: 123456789)","form.attribute.item.number.type.decimal":"소수 (ex: 2.22)","form.attribute.item.number.type.float":"실수 (ex: 3.33333333)","form.attribute.item.number.type.integer":"정수 (ex: 10)","form.attribute.item.privateField":"Private field","form.attribute.item.privateField.description":"이 필드는 API 응답에 표시되지 않습니다.","form.attribute.item.requiredField":"필수 항목","form.attribute.item.requiredField.description":"필수 항목일 경우 체크하세요.","form.attribute.item.text.regex":"정규식 패턴","form.attribute.item.text.regex.description":"정규식 텍스트","form.attribute.item.uniqueField":"유니크 항목","form.attribute.item.uniqueField.description":"유일한 값만 허용 할 경우 체크하세요.","form.attribute.media.allowed-types":"허용할 미디어 타입을 선택합니다.","form.attribute.media.allowed-types.option-files":"파일","form.attribute.media.allowed-types.option-images":"이미지","form.attribute.media.allowed-types.option-videos":"영상","form.attribute.media.option.multiple":"복수 미디어","form.attribute.media.option.multiple.description":"슬라이더, 캐로셀(carousels), 혹은 여러 파일 다운로드에 적합합니다.","form.attribute.media.option.single":"단일 미디어","form.attribute.media.option.single.description":"아바타, 프로필 사진 또는 커버에 적합합니다.","form.attribute.settings.default":"기본값","form.attribute.text.option.long-text":"긴 텍스트","form.attribute.text.option.long-text.description":"설명, 이야기에 적합합니다. 정확한 검색(Exact search)은 불가능합니다.","form.attribute.text.option.short-text":"짧은 텍스트","form.attribute.text.option.short-text.description":"제목, 이름, 링크(URL)에 적합합니다. 또한 필드에서 정확한 검색(Exact search)이 가능합니다.","form.button.add-components-to-dynamiczone":"다이나믹 존에 컴포넌트 추가","form.button.add-field":"다른 필드 추가","form.button.add-first-field-to-created-component":"컴포넌트에 첫 필드 만들기","form.button.add.field.to.collectionType":"이 콜렉션 타입에 다른 필드 추가하기","form.button.add.field.to.component":"이 컴포넌트에 다른 필드 추가하기","form.button.add.field.to.contentType":"이 콘텐츠 타입에 다른 필드 추가하기","form.button.add.field.to.singleType":"이 싱글 타입에 다른 필드 추가하기","form.button.cancel":"취소","form.button.collection-type.description":"기사(Article), 제품(Product) 등 여러개의 콘텐츠가 필요한 경우에 적합합니다.","form.button.configure-component":"컴포넌트 설정","form.button.configure-view":"보기 설정","form.button.select-component":"컴포넌트 선택","form.button.single-type.description":"About us, 홈페이지 등 단일 콘텐츠가 필요한 경우에 적합합니다.","from":"from","listView.headerLayout.description":"콘텐츠 구조를 만듭니다.","modalForm.attribute.form.base.name.description":"속성 이름에는 공백을 사용할 수 없습니다.","modalForm.attribute.form.base.name.placeholder":"예: slug, seoUrl, 표준Url","modalForm.attribute.target-field":"Attached field","modalForm.attributes.select-component":"컴포넌트 선택","modalForm.attributes.select-components":"컴포넌트 여러개 선택","modalForm.collectionType.header-create":"콜렉션 타입 생성","modalForm.component.header-create":"컴포넌트 생성","modalForm.components.create-component.category.label":"카테고리를 선택하거나 새 카테고리 이름을 입력해주세요.","modalForm.components.icon.label":"아이콘","modalForm.editCategory.base.name.description":"카테고리 이름에 공백을 사용할 수 없습니다.","modalForm.header-edit":"{name} 수정","modalForm.header.categories":"카테고리","modalForm.singleType.header-create":"싱글 타입 생성","modalForm.sub-header.addComponentToDynamicZone":"다이나믹 존에 새 컴포넌트를 추가합니다.","modalForm.sub-header.attribute.create":"새 {type} 필드 추가","modalForm.sub-header.attribute.create.step":"새 컴포넌트 추가 ({step}/2)","modalForm.sub-header.attribute.edit":"{name} 수정","modalForm.sub-header.chooseAttribute.collectionType":"콜렉션 타입에 추가할 필드를 선택해주세요.","modalForm.sub-header.chooseAttribute.component":"컴포넌트에 추가할 필드를 선택해주세요.","modalForm.sub-header.chooseAttribute.singleType":"싱글 타입에 추가할 필드를 선택해주세요.","modelPage.attribute.relation-polymorphic":"릴레이션 (polymorphic)","modelPage.attribute.relationWith":"관계","notification.info.autoreaload-disable":"이 플러그인을 사용하려면 autoReload 기능이 필요합니다. `strapi develop`로 서버를 시작해주세요.","notification.info.creating.notSaved":"새 콜렉션 타입 또는 컴포넌트를 만들기 전에 작업을 저장해주세요.","plugin.description.long":"API를 위한 데이터 구조를 모델링 합니다. 새로운 필드와 릴레이션을 간단히 만드세요. 자동으로 설정 파일이 만들어 지고 프로젝트에 추가됩니다.","plugin.description.short":"API를 위한 데이터 구조를 모델링 합니다.","plugin.name":"콘텐츠 타입 빌더","popUpForm.navContainer.advanced":"고급 설정","popUpForm.navContainer.base":"기본 설정","popUpWarning.bodyMessage.cancel-modifications":"수정 내용을 취소하시겠습니까?","popUpWarning.bodyMessage.cancel-modifications.with-components":"수정 내용을 취소하시겠습니까? 생성 혹은 수정된 컴포넌트가 있습니다.","popUpWarning.bodyMessage.category.delete":"이 카테고리를 삭제하시겠습니까? 모든 컴포넌트가 함께 삭제됩니다.","popUpWarning.bodyMessage.component.delete":"이 컴포넌트를 삭제하시겠습니까?","popUpWarning.bodyMessage.contentType.delete":"이 콘텐츠 타입을 삭제 하시겠습니까?","popUpWarning.draft-publish.button.confirm":"네, 비활성화합니다.","popUpWarning.draft-publish.message":"초안/발행 시스템을 비활성화하면 초안이 삭제됩니다.","popUpWarning.draft-publish.second-message":"사용 안 함으로 설정하시겠습니까?","prompt.unsaved":"이 페이지를 떠나시겠습니까? 모든 변경 사항이 없어집니다.","relation.attributeName.placeholder":"예: author, category, tag","relation.manyToMany":"N : N","relation.manyToOne":"has many","relation.manyWay":"has many","relation.oneToMany":"1 : N","relation.oneToOne":"1 : 1","relation.oneWay":"has one","table.button.no-fields":"새 필드 추가","table.content.create-first-content-type":"첫 콜렉션 타입을 만들어보세요.","table.content.no-fields.collection-type":"콜렉션 타입에 첫 필드를 추가해보세요.","table.content.no-fields.component":"컴포넌트에 첫 필드를 추가해보세요."}');

/***/ })

}]);